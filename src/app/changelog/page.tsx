"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Search,
    X,
    ExternalLink,
    ArrowRight,
    Calendar,
    GitCommit,
} from "lucide-react";
import {
    CHANGELOG_ENTRIES,
    CHANGELOG_CATEGORIES,
    type CategoryFilter,
} from "@/lib/changelog";
import { GITHUB_RELEASES_URL, DOCS_RELEASE_NOTES_URL } from "@/lib/constants";
import { ReleaseVisual } from "@/components/visuals/ReleaseVisual";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

export default function ChangelogPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

    const filteredEntries = useMemo(() => {
        return CHANGELOG_ENTRIES.filter((entry) => {
            const matchesCategory =
                activeCategory === "All" || entry.category === activeCategory;
            const searchLower = search.trim().toLowerCase();
            if (!searchLower) return matchesCategory;

            const matchesTitle = entry.title
                .toLowerCase()
                .includes(searchLower);
            const matchesSummary = entry.summary
                .toLowerCase()
                .includes(searchLower);
            const matchesVersion = entry.version
                .toLowerCase()
                .includes(searchLower);
            const matchesHighlights = entry.highlights?.some((h) =>
                h.toLowerCase().includes(searchLower)
            );

            return (
                matchesCategory &&
                (matchesTitle ||
                    matchesSummary ||
                    matchesVersion ||
                    matchesHighlights)
            );
        });
    }, [search, activeCategory]);

    return (
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
            {/* 1. Editorial Header */}
            <ScrollReveal delay={0}>
                <div className="mb-12 border-b border-[var(--border-light)] pb-10">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <span className="editorial-badge mb-3 border border-[var(--border-light)] bg-[var(--card-bg)] text-[var(--accent-light)]">
                                Release Highlights
                            </span>
                            <h1 className="section-heading">
                                Release Highlights & Milestones
                            </h1>
                            <p className="section-subheading max-w-2xl">
                                Curated milestones, architecture transitions, and
                                feature updates across Passcodes releases. Complete
                                historical notes and tags are maintained in our official
                                documentation and GitHub releases.
                            </p>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-[var(--text-muted)]">
                            <Link
                                href={GITHUB_RELEASES_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-light)] bg-[var(--card-bg)] px-3 py-1.5 transition-colors hover:border-[var(--border)] hover:text-[var(--text)]"
                            >
                                <GitCommit className="h-3.5 w-3.5" />
                                <span>GitHub Tags</span>
                                <ExternalLink className="h-3 w-3 opacity-60" />
                            </Link>
                            <Link
                                href={DOCS_RELEASE_NOTES_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-light)] bg-[var(--card-bg)] px-3 py-1.5 transition-colors hover:border-[var(--border)] hover:text-[var(--text)]"
                            >
                                <span>Docs Notes</span>
                                <ExternalLink className="h-3 w-3 opacity-60" />
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* 2. Filter and Search Controls */}
            <ScrollReveal delay={60}>
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div
                        className="flex flex-wrap gap-1.5"
                        role="tablist"
                        aria-label="Changelog categories"
                    >
                        {CHANGELOG_CATEGORIES.map((cat) => {
                            const isSelected = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    role="tab"
                                    aria-selected={isSelected}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
                                        isSelected
                                            ? "bg-[var(--text)] font-semibold text-[var(--primary-dark)] shadow-sm"
                                            : "border border-[var(--border-light)] bg-[var(--card-bg)] text-[var(--text-muted)] hover:bg-[var(--card-bg-hover)] hover:text-[var(--text)]"
                                    )}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>

                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-dim)]" />
                        <input
                            type="text"
                            placeholder="Filter updates..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-lg border border-[var(--border-light)] bg-[var(--card-bg)] py-1.5 pl-9 pr-8 text-sm text-[var(--text)] placeholder-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent-light)]"
                            aria-label="Search changelog entries"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-dim)] hover:text-[var(--text)]"
                                aria-label="Clear search"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        )}
                    </div>
                </div>
            </ScrollReveal>

            {/* 3. Release Timeline Stream */}
            {filteredEntries.length === 0 ? (
                <div className="rounded-2xl border border-[var(--border-light)] bg-[var(--card-bg)] p-12 text-center">
                    <p className="text-base font-medium text-[var(--text)]">
                        No updates match your filter
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Try clearing your search query or selecting
                        &quot;All&quot; categories.
                    </p>
                    <button
                        onClick={() => {
                            setSearch("");
                            setActiveCategory("All");
                        }}
                        className="btn btn-outline btn-small mt-4"
                    >
                        Reset Filters
                    </button>
                </div>
            ) : (
                <div className="relative space-y-12">
                    {filteredEntries.map((entry, index) => {
                        const isLatest =
                            index === 0 && activeCategory === "All" && !search;
                        return (
                            <ScrollReveal
                                key={entry.slug}
                                delay={Math.min(index * 50, 150)}
                                distance={16}
                            >
                                <article className="relative grid gap-6 border-b border-[var(--border-light)] pb-12 sm:grid-cols-12 sm:gap-8">
                                    {/* Left Column: Metadata & Category Node */}
                                    <div className="sm:col-span-4 lg:col-span-3">
                                        <div className="sticky top-24 flex flex-col gap-2.5">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className={cn(
                                                        "tag",
                                                        entry.releaseType ===
                                                            "Stable" &&
                                                            "tag stable",
                                                        entry.releaseType ===
                                                            "Beta" &&
                                                            "tag beta",
                                                        entry.releaseType ===
                                                            "Alpha" &&
                                                            "tag alpha"
                                                    )}
                                                >
                                                    {entry.releaseType}
                                                </span>
                                                {isLatest && (
                                                    <span className="editorial-badge border-[var(--accent-light)]/30 bg-[var(--accent-light)]/15 border text-[var(--accent-light)]">
                                                        Latest
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-sm font-bold text-[var(--text)]">
                                                    {entry.version}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                                                <Calendar className="h-3.5 w-3.5" />
                                                <time dateTime={entry.date}>
                                                    {new Date(
                                                        entry.date
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            year: "numeric",
                                                            month: "short",
                                                            day: "numeric",
                                                        }
                                                    )}
                                                </time>
                                            </div>

                                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                                                <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-light)] bg-[var(--card-bg)] px-2.5 py-1">
                                                    <ReleaseVisual
                                                        category={
                                                            entry.category
                                                        }
                                                        className="h-3.5 w-3.5"
                                                    />
                                                    <span>
                                                        {entry.category}
                                                    </span>
                                                </span>
                                            </div>

                                            {entry.githubUrl && (
                                                <div className="mt-2 border-t border-[var(--border-light)] pt-2">
                                                    <Link
                                                        href={entry.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 text-xs text-[var(--text-dim)] transition-colors hover:text-[var(--accent-light)]"
                                                    >
                                                        <span>
                                                            GitHub Release
                                                        </span>
                                                        <ExternalLink className="h-3 w-3" />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Editorial Summary & Highlights */}
                                    <div className="sm:col-span-8 lg:col-span-9">
                                        <h2 className="text-xl font-bold tracking-tight text-[var(--text)] sm:text-2xl">
                                            <Link
                                                href={`/changelog/${entry.slug}`}
                                                className="transition-colors hover:text-[var(--accent-light)]"
                                            >
                                                {entry.title}
                                            </Link>
                                        </h2>

                                        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                                            {entry.summary}
                                        </p>

                                        {/* Highlights Bullet List */}
                                        {entry.highlights &&
                                            entry.highlights.length > 0 && (
                                                <div className="mt-5 space-y-2.5">
                                                    {entry.highlights.map(
                                                        (highlight, hIdx) => (
                                                            <div
                                                                key={hIdx}
                                                                className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
                                                            >
                                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-light)]" />
                                                                <span className="leading-relaxed">
                                                                    {highlight}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}

                                        {/* Link to detail page */}
                                        <div className="mt-6">
                                            <Link
                                                href={`/changelog/${entry.slug}`}
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-light)] transition-all hover:gap-2"
                                            >
                                                <span>
                                                    Read full release notes
                                                </span>
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
