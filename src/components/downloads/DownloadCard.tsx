'use client';

import { useState } from 'react';
import { Download, Calendar, Tag, HardDrive } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ButtonLink } from '@/components/ui/Button';
import {
  formatNumber,
  formatFileSize,
  formatDate,
  pickApkAsset,
  cn,
} from '@/lib/utils';
import type { GithubRelease } from '@/types/github';

export function DownloadCard({
  release,
  isLatest = false,
}: {
  release: GithubRelease;
  isLatest?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const apk = pickApkAsset(release.assets);
  const totalDownloads = release.assets.reduce(
    (sum, a) => sum + a.download_count,
    0
  );

  return (
    <div className={cn('release-card', isLatest && 'latest')}>
      <div className="release-top">
        <h3>{release.name || release.tag_name}</h3>
        <div className="flex items-center gap-2">
          {isLatest && <span className="tag stable">Latest</span>}
          {release.prerelease && <span className="tag beta">Pre-release</span>}
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
        {apk && (
          <span className="flex items-center gap-1">
            <HardDrive className="h-3.5 w-3.5" aria-hidden="true" />
            {formatFileSize(apk.size)}
          </span>
        )}
        <span className="release-download-count">
          <Download className="mr-1 inline h-3 w-3" aria-hidden="true" />
          {formatNumber(totalDownloads)}
        </span>
      </div>

      {release.body && (
        <div className="mt-4">
          <div
            className={cn(
              'relative overflow-hidden rounded-xl border border-[var(--border-light)] bg-[var(--card-bg)] p-4 transition-[max-height] duration-300',
              expanded ? '' : 'max-h-44'
            )}
          >
            <div className="markdown-body text-sm">
              <Markdown remarkPlugins={[remarkGfm]}>{release.body}</Markdown>
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
            style={{ color: 'var(--accent-light)' }}
          >
            {expanded ? 'Show less' : 'Read full release notes'}
          </button>
        </div>
      )}

      {apk && (
        <div className="release-actions">
          <ButtonLink href={apk.browser_download_url} variant="filled" download>
            <Download className="h-5 w-5" aria-hidden="true" /> Download APK (
            {formatFileSize(apk.size)})
          </ButtonLink>
        </div>
      )}
    </div>
  );
}
