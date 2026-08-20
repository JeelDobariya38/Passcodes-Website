"use client";

import type { ChangelogCategory } from "@/lib/changelog";

interface ReleaseVisualProps {
    category: ChangelogCategory;
    className?: string;
}

export function ReleaseVisual({
    category,
    className = "h-6 w-6",
}: ReleaseVisualProps) {
    switch (category) {
        case "Features":
            // Expanding geometry (radiating square-diamond spatial expansion)
            return (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={className}
                    aria-hidden="true"
                >
                    <path
                        d="M12 3L20 12L12 21L4 12Z"
                        className="text-[var(--accent-light)] opacity-70"
                        strokeDasharray="2 2"
                    />
                    <path
                        d="M12 7L16.5 12L12 17L7.5 12Z"
                        className="text-[var(--accent-light)]"
                        fill="currentColor"
                        fillOpacity="0.25"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="1.5"
                        className="text-[var(--text)]"
                        fill="currentColor"
                    />
                </svg>
            );

        case "Security":
            // Nested protected vault shell
            return (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={className}
                    aria-hidden="true"
                >
                    <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="4"
                        className="text-[var(--accent-light)] opacity-60"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="3.5"
                        className="text-[var(--accent-light)]"
                        fill="currentColor"
                        fillOpacity="0.2"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="1"
                        className="text-[var(--text)]"
                        fill="currentColor"
                    />
                </svg>
            );

        case "Architecture":
            // Connected network nodes & spatial foundation
            return (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={className}
                    aria-hidden="true"
                >
                    <circle
                        cx="12"
                        cy="5"
                        r="2"
                        className="text-[var(--accent-light)]"
                        fill="currentColor"
                        fillOpacity="0.3"
                    />
                    <circle
                        cx="5"
                        cy="18"
                        r="2"
                        className="text-[var(--text-dim)]"
                        fill="currentColor"
                        fillOpacity="0.3"
                    />
                    <circle
                        cx="19"
                        cy="18"
                        r="2"
                        className="text-[var(--accent-light)]"
                        fill="currentColor"
                        fillOpacity="0.3"
                    />
                    <path d="M12 7L5 16" className="text-[var(--border)]" />
                    <path
                        d="M12 7L19 16"
                        className="text-[var(--accent-light)]"
                        opacity="0.6"
                    />
                    <path
                        d="M7 18L17 18"
                        className="text-[var(--border)]"
                        strokeDasharray="2 2"
                    />
                </svg>
            );

        case "Fixes":
            // Converging precision paths
            return (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={className}
                    aria-hidden="true"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="8"
                        className="text-[var(--border)]"
                        strokeDasharray="3 3"
                    />
                    <path
                        d="M12 7V17M7 12H17"
                        className="text-[var(--accent-light)]"
                        opacity="0.8"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="2"
                        className="text-[var(--accent-light)]"
                        fill="currentColor"
                    />
                </svg>
            );

        case "Improvements":
        default:
            // Flowing spatial waveforms / trajectory
            return (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={className}
                    aria-hidden="true"
                >
                    <path
                        d="M3 15C7 15 8 9 12 9C16 9 17 15 21 15"
                        className="text-[var(--accent-light)]"
                        opacity="0.85"
                    />
                    <path
                        d="M3 11C7 11 8 6 12 6C16 6 17 11 21 11"
                        className="text-[var(--border)]"
                        strokeDasharray="2 2"
                    />
                    <circle
                        cx="12"
                        cy="9"
                        r="1.5"
                        className="text-[var(--text)]"
                        fill="currentColor"
                    />
                </svg>
            );
    }
}
