import { notFound } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Tag,
    Calendar,
    ExternalLink,
    GitCompare,
    GitCommit,
    CheckCircle2,
} from "lucide-react";
import {
    CHANGELOG_ENTRIES,
    getChangelogEntryBySlug,
    getAdjacentEntries,
} from "@/lib/changelog";
import { SITE_META } from "@/lib/constants";
import { ReleaseVisual } from "@/components/visuals/ReleaseVisual";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return CHANGELOG_ENTRIES.map((entry) => ({
        slug: entry.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const entry = getChangelogEntryBySlug(params.slug);
    if (!entry) return { title: "Release Not Found" };

    const pageTitle = `${entry.title} | Passcodes Changelog`;
    return {
        title: pageTitle,
        description: entry.summary,
        openGraph: {
            title: pageTitle,
            description: entry.summary,
            url: `${SITE_META.url}/changelog/${entry.slug}`,
            siteName: "Passcodes",
            type: "article",
        },
    };
}

export default function ChangelogEntryPage({
    params,
}: {
    params: { slug: string };
}) {
    const entry = getChangelogEntryBySlug(params.slug);
    if (!entry) notFound();

    const { prev, next } = getAdjacentEntries(params.slug);

    return (
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
            {/* 1. Header & Release Metadata */}
            <ScrollReveal delay={0}>
                <div className="mb-8">
                    <Link
                        href="/changelog"
                        className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>Back to all updates</span>
                    </Link>
                </div>

                <header className="mb-10 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                        <span
                            className={cn(
                                "tag",
                                entry.releaseType === "Stable" && "tag stable",
                                entry.releaseType === "Beta" && "tag beta",
                                entry.releaseType === "Alpha" && "tag alpha"
                            )}
                        >
                            {entry.releaseType}
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-light)] bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
                            <Calendar className="h-3.5 w-3.5 text-[var(--text-dim)]" />
                            <time dateTime={entry.date}>
                                {new Date(entry.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </time>
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-light)] bg-[var(--card-bg)] px-2.5 py-1 font-mono text-xs text-[var(--accent-light)]">
                            <Tag className="h-3.5 w-3.5" />
                            {entry.version}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-light)] bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--text-dim)]">
                            <ReleaseVisual
                                category={entry.category}
                                className="h-3.5 w-3.5"
                            />
                            <span>{entry.category}</span>
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
                        {entry.title}
                    </h1>

                    <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                        {entry.summary}
                    </p>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        {entry.githubUrl && (
                            <Link
                                href={entry.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-small"
                            >
                                <GitCommit className="h-3.5 w-3.5" />
                                <span>GitHub Release</span>
                                <ExternalLink className="h-3 w-3 opacity-60" />
                            </Link>
                        )}
                        {entry.compareUrl && (
                            <Link
                                href={entry.compareUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-small"
                            >
                                <GitCompare className="h-3.5 w-3.5" />
                                <span>Compare Diffs</span>
                                <ExternalLink className="h-3 w-3 opacity-60" />
                            </Link>
                        )}
                    </div>
                </header>
            </ScrollReveal>

            {/* 2. Article Content (Highlights + Release Sections) */}
            <ScrollReveal delay={60}>
                <article className="border-b border-[var(--border-light)] pb-14">
                    {/* Highlights Callout */}
                    {entry.highlights && entry.highlights.length > 0 && (
                        <div className="mb-10 rounded-xl border border-[var(--border-light)] bg-[var(--card-bg)] p-6 sm:p-8">
                            <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-[var(--text)]">
                                <CheckCircle2 className="h-4 w-4 text-[var(--accent-light)]" />
                                <span>Release Highlights</span>
                            </h2>
                            <ul className="space-y-3">
                                {entry.highlights.map((highlight, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm text-[var(--text-muted)]"
                                    >
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-light)]" />
                                        <span className="leading-relaxed">
                                            {highlight}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Detailed Sections */}
                    {entry.sections && entry.sections.length > 0 && (
                        <div className="space-y-8">
                            {entry.sections.map((section, sIdx) => (
                                <div key={sIdx} className="space-y-3">
                                    <h3 className="text-lg font-bold tracking-tight text-[var(--text)]">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {section.items.map((item, iIdx) => (
                                            <li
                                                key={iIdx}
                                                className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
                                            >
                                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-dim)]" />
                                                <span className="leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </article>
            </ScrollReveal>

            {/* 3. Adjacent Release Pagination */}
            <ScrollReveal delay={100}>
                <nav
                    aria-label="Release pagination"
                    className="mt-12 grid gap-4 sm:grid-cols-2"
                >
                    {prev ? (
                        <Link
                            href={`/changelog/${prev.slug}`}
                            className="subtle-card group flex flex-col gap-1 text-left"
                        >
                            <span className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
                                <span>Previous Release</span>
                            </span>
                            <span className="text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-light)]">
                                {prev.version} — {prev.title}
                            </span>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {next ? (
                        <Link
                            href={`/changelog/${next.slug}`}
                            className="subtle-card group flex flex-col gap-1 text-right sm:items-end"
                        >
                            <span className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                                <span>Next Release</span>
                                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </span>
                            <span className="text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-light)]">
                                {next.version} — {next.title}
                            </span>
                        </Link>
                    ) : (
                        <div />
                    )}
                </nav>
            </ScrollReveal>
        </div>
    );
}
