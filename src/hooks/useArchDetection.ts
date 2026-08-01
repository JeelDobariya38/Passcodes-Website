"use client";

import { useEffect, useState } from "react";
import type { ArchKey } from "@/types/arch";

export interface ArchDetection {
    arch: ArchKey | null;
    isAndroid: boolean;
    source: "client-hints" | "ua-heuristic" | "none";
    isDetecting: boolean;
}

const INITIAL: ArchDetection = {
    arch: null,
    isAndroid: false,
    source: "none",
    isDetecting: true,
};

export function useArchDetection(): ArchDetection {
    const [state, setState] = useState<ArchDetection>(INITIAL);

    useEffect(() => {
        let cancelled = false;

        (async () => {
            const ua = navigator.userAgent.toLowerCase();
            const isAndroidUA = ua.includes("android");
            const uad = navigator.userAgentData; // typed via global.d.ts merge

            if (uad?.getHighEntropyValues) {
                try {
                    const h = await uad.getHighEntropyValues([
                        "architecture",
                        "bitness",
                        "platform",
                    ]);
                    const platform = (h.platform ?? "").toLowerCase();
                    const arch = (h.architecture ?? "").toLowerCase();
                    const bits = h.bitness;
                    const android = platform.includes("android") || isAndroidUA;

                    if (android) {
                        let a: ArchKey = "arm64";
                        let src: ArchDetection["source"] = "ua-heuristic";
                        if (arch.includes("arm")) {
                            a = bits === "32" ? "armv7" : "arm64";
                            src = "client-hints";
                        } else if (arch.includes("x86")) {
                            a = bits === "32" ? "x86" : "x86_64";
                            src = "client-hints";
                        }
                        if (!cancelled)
                            setState({
                                arch: a,
                                isAndroid: true,
                                source: src,
                                isDetecting: false,
                            });
                        return;
                    }
                    // Desktop: do NOT trust the host arch for an Android APK.
                    if (!cancelled)
                        setState({
                            arch: null,
                            isAndroid: false,
                            source: "client-hints",
                            isDetecting: false,
                        });
                    return;
                } catch {
                    /* fall through to UA path */
                }
            }

            if (isAndroidUA) {
                if (!cancelled)
                    setState({
                        arch: "arm64",
                        isAndroid: true,
                        source: "ua-heuristic",
                        isDetecting: false,
                    });
                return;
            }
            if (!cancelled)
                setState({
                    arch: null,
                    isAndroid: false,
                    source: "none",
                    isDetecting: false,
                });
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    return state;
}
