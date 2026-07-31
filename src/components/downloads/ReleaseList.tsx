'use client';

import { Download, Calendar, ExternalLink } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { formatNumber, formatDate, pickApkAsset } from '@/lib/utils';
import type { GithubRelease } from '@/types/github';

export function ReleaseList({ releases }: { releases: GithubRelease[] }) {
  if (releases.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-[var(--border)] p-8 text-center text-sm text-[var(--text-muted)]">
        No releases match your search.
      </p>
    );
  }

  return (
    <div className="mx-auto grid max-w-3xl gap-5">
      {releases.map((release) => {
        const apk = pickApkAsset(release.assets);
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
                  {release.prerelease && <span className="tag beta">pre</span>}
                </h3>
                <p className="release-date flex items-center gap-1">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  {formatDate(release.published_at)}
                </p>
              </div>
              <span className="release-download-count">
                <Download className="mr-1 inline h-3 w-3" aria-hidden="true" />
                {formatNumber(totalDownloads)}
              </span>
            </div>

            <div className="release-actions">
              {apk ? (
                <>
                  <ButtonLink
                    href={apk.browser_download_url}
                    variant="filled"
                    size="sm"
                    download
                  >
                    <Download className="h-4 w-4" aria-hidden="true" /> Download
                    APK
                  </ButtonLink>
                  <a
                    href={release.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-small"
                    aria-label="View release on GitHub"
                  >
                    <ExternalLink className="h-4 w-4" /> Release notes
                  </a>
                </>
              ) : (
                <ButtonLink
                  href={release.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  <ExternalLink className="h-4 w-4" /> View on GitHub
                </ButtonLink>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
