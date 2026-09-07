"use client";

import { useEffect, useState } from "react";

/**
 * Ambient background lighting providing restrained depth.
 * Zero WebGL/3D overhead, purely hardware-accelerated CSS layers.
 */
export function AmbientBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            className="pointer-events-none fixed inset-0 z-[-1] select-none overflow-hidden"
            aria-hidden="true"
        >
            {/* Ambient Sapphire Light Field (Restrained, Soft Depth) */}
            <div
                className="absolute left-1/2 top-[-15%] h-[500px] w-[850px] -translate-x-1/2 rounded-full opacity-20 blur-[140px] transition-opacity duration-1000 dark:opacity-15"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.22) 0%, rgba(2, 132, 199, 0.08) 45%, transparent 70%)",
                }}
            />

            {/* Subtle Horizon Grid (Ultra-faint, engineered) */}
            <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, currentColor 1px, transparent 1px),
                        linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    maskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 15%, black 30%, transparent 80%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 15%, black 30%, transparent 80%)",
                }}
            />

            {/* Lower Ambient Depth */}
            <div
                className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[500px] rounded-full opacity-10 blur-[130px] dark:opacity-10"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(30, 64, 175, 0.15) 0%, transparent 70%)",
                }}
            />
        </div>
    );
}
