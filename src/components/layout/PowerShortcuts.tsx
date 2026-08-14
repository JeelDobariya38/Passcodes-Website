"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download, MessageCircle, Keyboard, X } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import { DiscordIcon } from "@/components/ui/BrandIcons";
import { useLatestRelease } from "@/hooks/useGithubRelease";
import { useArchDetection } from "@/hooks/useArchDetection";
import { pickRecommendedApk } from "@/lib/utils";
import { DISCORD_URL } from "@/lib/constants";
import type { ArchKey } from "@/types/arch";

const LEADER = "p";
const ARM_TIMEOUT = 1400;

function isTyping(el: EventTarget | null): boolean {
    const n = el as HTMLElement | null;
    if (!n) return false;
    const tag = n.tagName;
    return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        n.isContentEditable === true
    );
}

export function PowerShortcuts() {
    const { data: latest } = useLatestRelease();
    const { arch, isDetecting } = useArchDetection();
    const [armed, setArmed] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [toast, setToast] = useState<string | null>(null);
    const armTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const flash = useCallback((msg: string) => {
        setToast(msg);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(null), 2200);
    }, []);

    const disarm = useCallback(() => {
        if (armTimer.current) clearTimeout(armTimer.current);
        armTimer.current = null;
        setArmed(false);
    }, []);

    const downloadLatest = useCallback(() => {
        const preferred: ArchKey = isDetecting
            ? "universal"
            : (arch ?? "arm64");
        const apk = latest
            ? pickRecommendedApk(latest.assets, preferred)
            : undefined;
        if (!apk) {
            flash("Release info still loading — try again in a sec.");
            return;
        }
        const a = document.createElement("a");
        a.href = apk.browser_download_url;
        a.setAttribute("download", "");
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
        flash(`Downloading ${apk.name}…`);
    }, [latest, arch, isDetecting, flash]);

    const openDiscord = useCallback(
        () => window.open(DISCORD_URL, "_blank", "noopener"),
        []
    );

    useEffect(() => {
        const h = () => setHelpOpen(true);
        window.addEventListener("passcodes:open-shortcuts", h);
        return () => window.removeEventListener("passcodes:open-shortcuts", h);
    }, []);

    useEffect(() => {
        if (helpOpen) disarm();
    }, [helpOpen, disarm]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.repeat) return;
            if (document.querySelector("dialog[open]")) return; // never fight an open dialog
            if (isTyping(e.target)) {
                disarm();
                return;
            }
            const hasCtrl = e.ctrlKey || e.metaKey || e.altKey;

            if (!armed) {
                if (!hasCtrl && e.key.toLowerCase() === LEADER) {
                    e.preventDefault();
                    setArmed(true);
                    if (armTimer.current) clearTimeout(armTimer.current);
                    armTimer.current = setTimeout(disarm, ARM_TIMEOUT);
                }
                return;
            }

            // armed window ---------------------------------------------------------
            if (["Shift", "Control", "Alt", "Meta"].includes(e.key)) return; // bare modifier
            if (!hasCtrl && e.key.toLowerCase() === LEADER) {
                // re-arm
                if (armTimer.current) clearTimeout(armTimer.current);
                armTimer.current = setTimeout(disarm, ARM_TIMEOUT);
                return;
            }

            const letter = e.key.toLowerCase();
            const shift = e.shiftKey;
            if (e.key === "Escape") {
                disarm();
                return;
            }
            if (!hasCtrl && letter === "d" && !shift) {
                e.preventDefault();
                disarm();
                downloadLatest();
                return;
            }
            if (!hasCtrl && letter === "d" && shift) {
                e.preventDefault();
                disarm();
                openDiscord();
                downloadLatest();
                return;
            }
            if (!hasCtrl && letter === "c") {
                e.preventDefault();
                disarm();
                openDiscord();
                return;
            }
            if (!hasCtrl && (e.key === "?" || e.key === "/")) {
                e.preventDefault();
                disarm();
                setHelpOpen(true);
                return;
            }

            disarm(); // unknown chord
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [armed, disarm, downloadLatest, openDiscord]);

    return (
        <>
            {armed && (
                <div className="leader-pill" role="status" aria-live="polite">
                    <kbd className="kbd kbd-on">P</kbd>
                    <span className="kb-plus">+</span>
                    <kbd className="kbd">D</kbd>
                    <span className="dim">download</span>
                    <span className="leader-sep">·</span>
                    <kbd className="kbd kbd-on">P</kbd>
                    <span className="kb-plus">+</span>
                    <kbd className="kbd">C</kbd>
                    <span className="dim">discord</span>
                    <span className="leader-sep">·</span>
                    <kbd className="kbd kbd-on">P</kbd>
                    <span className="kb-plus">+</span>
                    <kbd className="kbd">?</kbd>
                    <span className="dim">help</span>
                    <span className="leader-sep">·</span>
                    <kbd className="kbd">Esc</kbd>
                    <span className="dim">cancel</span>
                    <button
                        type="button"
                        className="leader-esc"
                        onClick={disarm}
                        aria-label="Cancel shortcut"
                    >
                        <X className="h-3.5 w-3.5" />
                    </button>
                </div>
            )}

            {toast && !armed && (
                <div className="leader-pill" role="status" aria-live="polite">
                    {toast}
                </div>
            )}

            <button
                type="button"
                onClick={() => setHelpOpen(true)}
                className="shortcuts-fab hidden sm:inline-flex"
                aria-label="Keyboard shortcuts"
                title="Keyboard shortcuts (press P then ?)"
            >
                <Keyboard className="h-5 w-5" aria-hidden="true" />
            </button>

            <Dialog
                open={helpOpen}
                onClose={() => setHelpOpen(false)}
                aria-labelledby="kb-title"
            >
                <div className="dialog-content">
                    <div className="dialog-heading">
                        <span className="dialog-icon">
                            <Keyboard className="h-5 w-5" />
                        </span>
                        <h2 id="kb-title">Power shortcuts</h2>
                    </div>
                    <p>
                        Press <kbd className="kbd">P</kbd> then a key — a leader
                        chord for power users. Disabled while you&apos;re typing
                        in a field.
                    </p>

                    <ul className="kb-list">
                        <li className="kb-row">
                            <span className="kb-label">
                                <Download className="h-4 w-4" /> Download latest
                                release (your arch)
                            </span>
                            <span className="kb-keys">
                                <kbd className="kbd">P</kbd>
                                <span className="kb-plus">+</span>
                                <kbd className="kbd">D</kbd>
                            </span>
                        </li>
                        <li className="kb-row">
                            <span className="kb-label">
                                <DiscordIcon className="h-4 w-4" /> Open
                                Passcodes Discord
                            </span>
                            <span className="kb-keys">
                                <kbd className="kbd">P</kbd>
                                <span className="kb-plus">+</span>
                                <kbd className="kbd">C</kbd>
                            </span>
                        </li>
                        <li className="kb-row">
                            <span className="kb-label">
                                <MessageCircle className="h-4 w-4" /> Open
                                Discord + download latest
                            </span>
                            <span className="kb-keys">
                                <kbd className="kbd">P</kbd>
                                <span className="kb-plus">+</span>
                                <kbd className="kbd">Shift</kbd>
                                <kbd className="kbd">D</kbd>
                            </span>
                        </li>
                        <li className="kb-row">
                            <span className="kb-label">
                                <Keyboard className="h-4 w-4" /> Toggle this
                                help
                            </span>
                            <span className="kb-keys">
                                <kbd className="kbd">P</kbd>
                                <span className="kb-plus">+</span>
                                <kbd className="kbd">?</kbd>
                            </span>
                        </li>
                        <li className="kb-row">
                            <span className="kb-label">
                                <X className="h-4 w-4" /> Cancel a started chord
                            </span>
                            <span className="kb-keys">
                                <kbd className="kbd">Esc</kbd>
                            </span>
                        </li>
                    </ul>
                </div>
            </Dialog>
        </>
    );
}
