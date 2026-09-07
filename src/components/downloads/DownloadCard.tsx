"use client";

import { useState } from "react";
import { Download, Calendar, Tag } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArchDownload } from "@/components/downloads/ArchDownload";
import { formatNumber, formatDate, cn } from "@/lib/utils";
import { classifyRelease, isYankedRelease } from "@/hooks/useGithubRelease";
import type { GithubRelease } from "@/types/github";

export function DownloadCard({
    release,
    isLatest = false,
}: {
    release: GithubRelease;
    isLatest?: boolean;
}) {
    const [expanded, setExpanded] = useState(false);
    const totalDownloads = release.assets.reduce(
        (sum, a) => sum + a.download_count,
        0
    );
    const channel = classifyRelease(release);
    const isYanked = isYankedRelease(release);

    return (
        <div className={cn("release-card", isLatest && "latest")}>
            <div className="release-top">
                <h3>{release.name || release.tag_name}</h3>
                <div className="flex items-center gap-2">
                    {isLatest && <span className="tag stable">Latest</span>}
                    {isYanked && <span className="tag alpha">Yanked</span>}
                    {channel === "beta" && (
                        <span className="tag beta">Beta</span>
                    )}
                    {channel === "alpha" && (
                        <span className="tag alpha">Alpha</span>
                    )}
                    {!isLatest && channel === "stable" && (
                        <span className="tag stable">Stable</span>
                    )}
                </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                    {release.tag_name}
                </span>
                <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {formatDate(release.published_at)}
                </span>
                <span className="release-download-count">
                    <Download
                        className="mr-1 inline h-3 w-3"
                        aria-hidden="true"
                    />
                    {formatNumber(totalDownloads)}
                </span>
            </div>

            {release.body && (
                <div className="mt-4">
                    <div
                        className={cn(
                            "relative overflow-hidden rounded-xl border border-[var(--border-light)] bg-[var(--card-bg)] p-4 transition-[max-height] duration-300",
                            expanded ? "" : "max-h-44"
                        )}
                    >
                        <div className="markdown-body text-sm">
                            <Markdown remarkPlugins={[remarkGfm]}>
                                {release.body}
                            </Markdown>
                        </div>
                        {!expanded && (
                            <div
                                className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--card-bg)] to-transparent"
                                aria-hidden="true"
                            />
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => setExpanded((v) => !v)}
                        className="mt-2 text-sm font-medium"
                        style={{ color: "var(--accent-light)" }}
                    >
                        {expanded ? "Show less" : "Read full release notes"}
                    </button>
                </div>
            )}

            {/* Architecture-aware download (replaces the old single universal button) */}
            <ArchDownload assets={release.assets} variant="full" />
        </div>
    );
}
