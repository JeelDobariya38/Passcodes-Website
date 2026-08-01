"use client";

import { Download, BookOpen } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { GithubIcon, DiscordIcon } from "@/components/ui/BrandIcons";
import { useDownloadCount } from "@/hooks/useDownloadCount";
import { useLatestRelease } from "@/hooks/useGithubRelease";
import { formatNumber } from "@/lib/utils";
import { GITHUB_REPO_URL, DISCORD_URL, USER_GUIDE_URL } from "@/lib/constants";

export function Hero() {
    const { data: downloadStats } = useDownloadCount();
    const { data: latestRelease } = useLatestRelease();

    return (
        <section className="px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                {/* Focal logo */}
                <Logo className="hero-logo floating-animation mb-6" />

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Your passwords,{" "}
                    <span style={{ color: "var(--accent-light)" }}>
                        securely on your device
                    </span>
                </h1>

                <p className="hero-tagline mt-4">
                    Passcodes is a free, open-source password manager for
                    Android. No cloud. No accounts. Your data never leaves your
                    phone.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <ButtonLink href="/downloads" variant="filled">
                        <Download className="h-5 w-5" aria-hidden="true" />{" "}
                        Download for Android
                    </ButtonLink>
                    <ButtonLink
                        href={GITHUB_REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                    >
                        <GithubIcon className="h-5 w-5" /> View on GitHub
                    </ButtonLink>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <ButtonLink
                        href={DISCORD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        size="sm"
                    >
                        <DiscordIcon className="h-4 w-4" /> Join Discord
                    </ButtonLink>
                    <ButtonLink
                        href={USER_GUIDE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        size="sm"
                    >
                        <BookOpen className="h-4 w-4" /> User Guide
                    </ButtonLink>
                </div>

                <p className="kb-tip mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-[var(--text-muted)]">
                    <span className="font-medium text-[var(--text)]">
                        Power user?
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <kbd className="kbd">P</kbd>
                        <span className="kb-plus">+</span>
                        <kbd className="kbd">D</kbd>
                    </span>
                    <span>downloads instantly</span>
                    <span className="kb-dot" aria-hidden="true">
                        ·
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <kbd className="kbd">P</kbd>
                        <span className="kb-plus">+</span>
                        <kbd className="kbd">?</kbd>
                    </span>
                    <span>all shortcuts</span>
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-dim)]">
                    {downloadStats && (
                        <span>
                            <strong className="text-[var(--text)]">
                                {formatNumber(downloadStats.totalDownloads)}
                            </strong>{" "}
                            downloads
                        </span>
                    )}
                    {latestRelease && (
                        <span className="font-mono">
                            v{latestRelease.tag_name.replace(/^v/, "")} · latest
                        </span>
                    )}
                </div>
            </div>
        </section>
    );
}
