export type ChangelogCategory =
    "Features" | "Improvements" | "Fixes" | "Security" | "Architecture";

export interface ChangelogSection {
    title: string;
    items: string[];
}

export interface ChangelogEntry {
    slug: string;
    version: string;
    title: string;
    date: string;
    releaseType: "Stable" | "Beta" | "Alpha";
    category: ChangelogCategory;
    summary: string;
    highlights?: string[];
    sections?: ChangelogSection[];
    githubUrl?: string;
    compareUrl?: string;
}

export const CHANGELOG_CATEGORIES = [
    "All",
    "Features",
    "Improvements",
    "Fixes",
    "Security",
    "Architecture",
] as const;

export type CategoryFilter = (typeof CHANGELOG_CATEGORIES)[number];

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
    {
        slug: "v3-2-1-stable",
        version: "v3.2.1",
        title: "v3.2.1 — Split ABIs & Screenshot Prevention",
        date: "2026-08-02",
        releaseType: "Stable",
        category: "Improvements",
        summary:
            "Support for split Android ABIs for smaller download sizes, tab navigation back-stack fixes, screenshot prevention toggle, and UI consistency.",
        highlights: [
            "Split ABI architecture builds (arm64-v8a, armeabi-v7a, x86_64, x86, universal) reducing APK size significantly.",
            "Explicit screenshot and screen recording prevention for credential protection.",
            "Fixed tab layout back navigation behavior across nested views.",
            "Refined settings screen styling and responsive component alignments.",
        ],
        sections: [
            {
                title: "New Features & Security",
                items: [
                    "Explicit in-app screenshot prevention toggle in security settings.",
                    "Enhanced secure window flags during biometric authentication prompts.",
                ],
            },
            {
                title: "Bug Fixes & Architecture",
                items: [
                    "Support for split ABIs in release packaging to reduce disk footprint.",
                    "Resolved tab bar back navigation issue when switching tabs.",
                    "UI consistency improvements across light and dark themes.",
                    "Cleaned and optimized Expo configuration (app.config.ts).",
                ],
            },
        ],
        githubUrl:
            "https://github.com/PasscodesApp/Passcodes/releases/tag/v3.2.1",
        compareUrl:
            "https://github.com/PasscodesApp/Passcodes/compare/v3.2.0...v3.2.1",
    },
    {
        slug: "v3-2-0-stable",
        version: "v3.2.0",
        title: "v3.2.0 — Modern Material UI & Dark Mode",
        date: "2026-07-25",
        releaseType: "Stable",
        category: "Features",
        summary:
            "Complete Material 3 UI overhaul, system dark mode support, gesture navigation, and screen capture prevention.",
        highlights: [
            "Modern Material UI design system with fluid animations and responsive layout.",
            "Comprehensive dark theme support with true black and low-contrast palettes.",
            "Screen capture and screenshot protection across all credential views.",
            "Pull-to-refresh password list and tab navigation improvements.",
            "Upgraded underlying foundation to Expo SDK 57.",
        ],
        sections: [
            {
                title: "New Features",
                items: [
                    "Material 3 design system implementation across all screens.",
                    "System dark mode and manual theme toggle support.",
                    "Pull-to-refresh gesture support on the password list.",
                    "Enhanced tab navigation and smooth screen transitions.",
                ],
            },
            {
                title: "Performance & Maintenance",
                items: [
                    "Reduced memory consumption when loading large credential lists.",
                    "Optimized bundle size and startup latency.",
                    "Dependency bump to Expo SDK 57.",
                ],
            },
        ],
        githubUrl:
            "https://github.com/PasscodesApp/Passcodes/releases/tag/v3.2.0",
        compareUrl:
            "https://github.com/PasscodesApp/Passcodes/compare/v3.1.0...v3.2.0",
    },
    {
        slug: "v3-1-0-stable",
        version: "v3.1.0",
        title: "v3.1.0 — Biometric Auth & Google Passwords Import/Export",
        date: "2026-06-22",
        releaseType: "Stable",
        category: "Features",
        summary:
            "Biometric authentication (fingerprint/face unlock), Google Passwords CSV import & export, password detail viewer, and data recovery safeguards.",
        highlights: [
            "Native biometric authentication for unlocking app access.",
            "Seamless import and export compatibility with Google Passwords CSV.",
            "Multi-purpose password detail screen with quick copy actions.",
            "Data recovery troubleshooting tools and uninstall data preservation prompt.",
        ],
        sections: [
            {
                title: "Security & Auth",
                items: [
                    "Fingerprint and biometric prompt integration via Android BiometricPrompt.",
                    "In-app auto-lock locking the app after 2 minutes of background inactivity.",
                ],
            },
            {
                title: "Credential Management",
                items: [
                    "Full import & export pipeline compatible with standard password formats.",
                    "Inline password updating and credential editing.",
                    "Search and filtering across stored credentials.",
                ],
            },
            {
                title: "Developer Experience",
                items: [
                    "Development builds and customized splash screens.",
                    "Modularized reusable component library.",
                    "Optimized towards Expo SDK 56.",
                ],
            },
        ],
        githubUrl:
            "https://github.com/PasscodesApp/Passcodes/releases/tag/v3.1.0",
        compareUrl:
            "https://github.com/PasscodesApp/Passcodes/compare/v3.0.0...v3.1.0",
    },
    {
        slug: "v3-0-0-alpha",
        version: "v3.0.0",
        title: "v3.0.0 — Complete Architecture Rewrite (Expo / React Native)",
        date: "2026-05-24",
        releaseType: "Alpha",
        category: "Architecture",
        summary:
            "Major from-scratch architectural rewrite transitioning Passcodes from the legacy native Android codebase to Expo and React Native, establishing a clean foundation for core password management.",
        highlights: [
            "Complete from-scratch rewrite replacing the retired native Android architecture with Expo and React Native.",
            "New local persistent storage architecture built on SQLite and Drizzle ORM.",
            "Initial baseline release providing core password storage and basic manager functionality.",
            "Data recovery tools provided to migrate stored credentials from pre-v3 releases.",
        ],
        sections: [
            {
                title: "Architecture Rewrite",
                items: [
                    "Replaced the previous native Kotlin/Compose architecture with Expo (React Native).",
                    "Transitioned local database layer to expo-sqlite with Drizzle ORM.",
                    "Setup modern build configurations and streamlined module tree.",
                ],
            },
        ],
        githubUrl:
            "https://github.com/PasscodesApp/Passcodes/releases/tag/v3.0.0",
        compareUrl:
            "https://github.com/PasscodesApp/Passcodes/compare/v2.1.1...v3.0.0",
    },
    {
        slug: "v2-1-1-beta",
        version: "v2.1.1",
        title: "v2.1.1 — Biometric Auth & Navigation Scaffolding",
        date: "2026-05-19",
        releaseType: "Beta",
        category: "Improvements",
        summary:
            "Biometric authentication integration, dual navigation scaffolding, and autofill service adjustments in the pre-rewrite native architecture.",
        highlights: [
            "Biometric authentication in Compose Multiplatform (pre-rewrite architecture).",
            "Autofill service framework enhancements (preview/experimental).",
            "End of support announcement for v2.x codebase ahead of architecture rewrite.",
        ],
        sections: [
            {
                title: "Enhancements",
                items: [
                    "Dual navigation support (classical & modern screen layouts).",
                    "Experimental autofill adjustments in the native Android module.",
                    "Migrated network client from OkHttp to Ktor.",
                ],
            },
        ],
        githubUrl:
            "https://github.com/PasscodesApp/Passcodes/releases/tag/v2.1.1",
    },
    {
        slug: "v2-0-0-beta",
        version: "v2.0.0",
        title: "v2.0.0 — Compose Multiplatform Design System",
        date: "2026-04-16",
        releaseType: "Beta",
        category: "Features",
        summary:
            "Introduction of a unified design system in Compose Multiplatform, SQLite database v2 migration, and preview Android autofill service in the native codebase.",
        highlights: [
            "Brand new Compose Multiplatform design system (prior native architecture).",
            "Preview Android Autofill framework integration (experimental).",
            "Database module migrated to Kotlin Multiplatform library module.",
        ],
        githubUrl:
            "https://github.com/PasscodesApp/Passcodes/releases/tag/v2.0.0",
    },
    {
        slug: "v1-0-0-stable",
        version: "v1.0.0",
        title: "v1.0.0 — First Official Stable Release",
        date: "2025-08-16",
        releaseType: "Stable",
        category: "Features",
        summary:
            "The inaugural stable release of the original native Android application. Offline-first local password storage on device with zero cloud dependencies.",
        highlights: [
            "Local SQLite password storage on device via Android Room database.",
            "Migrated core application codebase from Java to Kotlin.",
            "In-app language and theme switching support with introductory onboarding hints.",
            "Full open-source release under the MIT License.",
        ],
        githubUrl:
            "https://github.com/PasscodesApp/Passcodes/releases/tag/v1.0.0",
    },
];

export function getAllChangelogEntries(): ChangelogEntry[] {
    return CHANGELOG_ENTRIES;
}

export function getChangelogEntryBySlug(
    slug: string
): ChangelogEntry | undefined {
    return CHANGELOG_ENTRIES.find((entry) => entry.slug === slug);
}

export function getLatestChangelogEntry(): ChangelogEntry {
    return CHANGELOG_ENTRIES[0];
}

export function getAdjacentEntries(currentSlug: string): {
    prev: ChangelogEntry | null;
    next: ChangelogEntry | null;
} {
    const index = CHANGELOG_ENTRIES.findIndex((e) => e.slug === currentSlug);
    if (index === -1) {
        return { prev: null, next: null };
    }
    return {
        prev:
            index < CHANGELOG_ENTRIES.length - 1
                ? CHANGELOG_ENTRIES[index + 1]
                : null,
        next: index > 0 ? CHANGELOG_ENTRIES[index - 1] : null,
    };
}
