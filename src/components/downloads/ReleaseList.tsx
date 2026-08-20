"use client";

import { Download, Calendar, ExternalLink } from "lucide-react";
import { ArchDownload } from "@/components/downloads/ArchDownload";
import { formatNumber, formatDate } from "@/lib/utils";
import type { GithubRelease } from "@/types/github";
import Link from "next/link";

export function ReleaseList({ releases }: { releases: GithubRelease[] }) {
    if (releases.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-[var(--border)] p-10 text-center">
                <p className="text-sm font-medium text-[var(--text)]">
                    No releases match your search
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Try searching for a different version tag or clearing the
                    filter.
                </p>
            </div>
        );
    }

    return (
        <div className="mx-auto grid max-w-3xl gap-4">
            {releases.map((release) => {
                const totalDownloads = release.assets.reduce(
                    (sum, a) => sum + a.download_count,
                    0
                );
                return (
                    <div key={release.id} className="release-card">
                        <div className="release-top">
                            <div className="min-w-0">
                                <h3 className="flex items-center gap-2">
                                    <span className="truncate">
                                        {release.name || release.tag_name}
                                    </span>
                                    {release.prerelease ? (
                                        <span className="tag beta">pre</span>
                                    ) : (
                                        <span className="tag stable">
                                            stable
                                        </span>
                                    )}
                                </h3>
                                <p className="release-date flex items-center gap-1.5">
                                    <Calendar
                                        className="h-3.5 w-3.5 text-[var(--text-dim)]"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        {formatDate(release.published_at)}
                                    </span>
                                </p>
                            </div>
                            <span className="release-download-count">
                                <Download
                                    className="mr-1 inline h-3 w-3"
                                    aria-hidden="true"
                                />
                                {formatNumber(totalDownloads)}
                            </span>
                        </div>

                        <div className="release-actions mt-3 flex-wrap items-center justify-between border-t border-[var(--border-light)] pt-3">
                            <ArchDownload
                                assets={release.assets}
                                variant="compact"
                            />
                            <Link
                                href={release.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-small"
                                aria-label="View release notes on GitHub"
                            >
                                <ExternalLink className="h-3.5 w-3.5" />
                                <span>GitHub Manifest</span>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
