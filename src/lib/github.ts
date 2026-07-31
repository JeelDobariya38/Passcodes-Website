import { API_ENDPOINTS } from './constants';
import type {
  GithubRelease,
  GithubContributor,
  GithubRepoInfo,
  DownloadStats,
} from '@/types/github';

/** Custom error for GitHub API rate limiting */
export class GithubRateLimitError extends Error {
  resetTime: Date;

  constructor(resetTimestamp: number) {
    super('GitHub API rate limit exceeded');
    this.name = 'GithubRateLimitError';
    this.resetTime = new Date(resetTimestamp * 1000);
  }
}

/**
 * Base fetch wrapper with error handling and rate limit detection.
 */
async function githubFetch<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  const remaining = response.headers.get('X-RateLimit-Remaining');
  if (remaining !== null && parseInt(remaining, 10) <= 0) {
    const resetTime = response.headers.get('X-RateLimit-Reset');
    throw new GithubRateLimitError(resetTime ? parseInt(resetTime, 10) : 0);
  }

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Resource not found. The repository or release may not exist.');
    }
    if (response.status === 403) {
      const resetTime = response.headers.get('X-RateLimit-Reset');
      throw new GithubRateLimitError(resetTime ? parseInt(resetTime, 10) : 0);
    }
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

/** Fetch the latest release from the Passcodes repository */
export async function getLatestRelease(): Promise<GithubRelease> {
  return githubFetch<GithubRelease>(API_ENDPOINTS.latestRelease);
}

/** Fetch all releases (for download history) */
export async function getAllReleases(): Promise<GithubRelease[]> {
  return githubFetch<GithubRelease[]>(
    `${API_ENDPOINTS.allReleases}?per_page=30`
  );
}

/** Fetch repository contributors */
export async function getContributors(): Promise<GithubContributor[]> {
  return githubFetch<GithubContributor[]>(
    `${API_ENDPOINTS.contributors}?per_page=50`
  );
}

/** Fetch repository metadata (stars, forks, etc.) */
export async function getRepoInfo(): Promise<GithubRepoInfo> {
  return githubFetch<GithubRepoInfo>(API_ENDPOINTS.repoInfo);
}

/**
 * Calculate aggregated download statistics.
 */
export async function getDownloadStats(): Promise<DownloadStats> {
  const releases = await getAllReleases();

  const totalDownloads = releases.reduce((total, release) => {
    const releaseDownloads = release.assets.reduce(
      (sum, asset) => sum + asset.download_count,
      0
    );
    return total + releaseDownloads;
  }, 0);

  const latestRelease = releases[0];
  const latestReleaseDownloads = latestRelease
    ? latestRelease.assets.reduce((sum, asset) => sum + asset.download_count, 0)
    : 0;

  return {
    totalDownloads,
    latestReleaseDownloads,
    releaseCount: releases.length,
  };
}
