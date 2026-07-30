'use client';

import { useMemo, useState } from 'react';
import { Search, XCircle, Store, AlertTriangle } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { DeviceWarning } from '@/components/downloads/DeviceWarning';
import { DownloadCard } from '@/components/downloads/DownloadCard';
import { ReleaseList } from '@/components/downloads/ReleaseList';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import {
  useLatestRelease,
  useAllReleases,
  isRateLimitError,
} from '@/hooks/useGithubRelease';
import { KOMI_STORE_URL, KOMI_BADGE_SRC } from '@/lib/constants';

type Status = 'all' | 'stable' | 'prerelease';

function KomiSection() {
  const [badgeFailed, setBadgeFailed] = useState(false);
  return (
    <section className="store-section">
      <h2>Also available on the Komi Store</h2>
      <p>
        Prefer an alternative store? You can grab Passcodes from the Komi Store
        too.
      </p>
      {badgeFailed ? (
        <a
          href={KOMI_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-filled"
        >
          Get on Komi Store
        </a>
      ) : (
        <a
          href={KOMI_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="store-badge"
          aria-label="Get it on Komi Store"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={KOMI_BADGE_SRC}
            alt="Get it on Komi Store"
            onError={() => setBadgeFailed(true)}
          />
        </a>
      )}
    </section>
  );
}

export function DownloadsContent() {
  const {
    data: latestRelease,
    isLoading: isLoadingLatest,
    error: latestError,
  } = useLatestRelease();
  const {
    data: allReleases,
    isLoading: isLoadingAll,
    error: allError,
  } = useAllReleases();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<Status>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (allReleases ?? []).filter((r) => {
      const matchQ =
        !q ||
        (r.name || '').toLowerCase().includes(q) ||
        r.tag_name.toLowerCase().includes(q) ||
        (r.body || '').toLowerCase().includes(q);
      const matchS =
        status === 'all' ||
        (status === 'prerelease' ? r.prerelease : !r.prerelease);
      return matchQ && matchS;
    });
  }, [allReleases, query, status]);

  const hasError = latestError || allError;
  const isRateLimited =
    isRateLimitError(latestError) || isRateLimitError(allError);
  const hasControls = query.trim() !== '' || status !== 'all';

  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          as="h1"
          float
          title="Downloads"
          subtitle="Get the latest version for your Android device. Always free, always open source."
        />

        <DeviceWarning />
        <KomiSection />

        {hasError && (
          <div
            className="alert-danger mb-8 flex items-start gap-3 rounded-2xl p-4"
            role="alert"
          >
            <AlertTriangle
              className="mt-0.5 h-5 w-5 shrink-0 text-[#ef4444]"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold">
                {isRateLimited
                  ? 'GitHub API rate limit reached'
                  : 'Unable to fetch release information'}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {isRateLimited
                  ? 'Please try again in a few minutes. You can still download directly from GitHub.'
                  : 'Please check your connection or try again later.'}
              </p>
            </div>
          </div>
        )}

        {isLoadingLatest ? (
          <LoadingSpinner label="Fetching latest release..." />
        ) : (
          latestRelease && <DownloadCard release={latestRelease} isLatest />
        )}

        <div className="mt-14">
          <h2 className="mb-5 text-center text-2xl font-bold">
            Release History
          </h2>

          <div className="release-search">
            <div className="relative w-full" style={{ maxWidth: 420 }}>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-dim)]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by version or notes…"
                aria-label="Search releases"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[var(--text-dim)] hover:text-[var(--text)]"
                >
                  <XCircle className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="release-filters">
            {(['all', 'stable', 'prerelease'] as Status[]).map((s) => (
              <button
                key={s}
                type="button"
                className={`filter-btn ${status === s ? 'active' : ''}`}
                onClick={() => setStatus(s)}
              >
                {s === 'all'
                  ? 'All'
                  : s === 'stable'
                    ? 'Stable'
                    : 'Pre-releases'}
              </button>
            ))}
          </div>

          {hasControls && (
            <p className="mb-5 text-center text-sm text-[var(--text-muted)]">
              Showing{' '}
              <strong className="text-[var(--text)]">{filtered.length}</strong>{' '}
              result{filtered.length === 1 ? '' : 's'}
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setStatus('all');
                }}
                className="ml-2 font-medium"
                style={{ color: 'var(--accent-light)' }}
              >
                Clear
              </button>
            </p>
          )}

          {isLoadingAll ? (
            <LoadingSpinner label="Loading releases..." />
          ) : (
            <ReleaseList releases={filtered} />
          )}
        </div>
      </div>
    </div>
  );
}
