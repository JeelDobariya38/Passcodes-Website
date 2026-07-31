'use client';

import { useQuery } from '@tanstack/react-query';
import { getLatestRelease, getAllReleases, GithubRateLimitError } from '@/lib/github';
import type { GithubRelease } from '@/types/github';

/** Fetch the latest GitHub release with caching and error handling */
export function useLatestRelease() {
  return useQuery<GithubRelease, Error>({
    queryKey: ['github', 'release', 'latest'],
    queryFn: getLatestRelease,
  });
}

/** Fetch all releases for download history */
export function useAllReleases() {
  return useQuery<GithubRelease[], Error>({
    queryKey: ['github', 'releases', 'all'],
    queryFn: getAllReleases,
  });
}

/** Type guard to check if an error is a rate limit error */
export function isRateLimitError(error: Error | null): boolean {
  return error instanceof GithubRateLimitError;
}
