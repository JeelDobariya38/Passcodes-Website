/** Represents a single release asset from GitHub */
export interface GithubReleaseAsset {
  id: number;
  name: string;
  size: number;
  download_count: number;
  browser_download_url: string;
  content_type: string;
  created_at: string;
  updated_at: string;
}

/** Represents a GitHub release */
export interface GithubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  html_url: string;
  assets: GithubReleaseAsset[];
}

/** Represents a GitHub repository contributor */
export interface GithubContributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: 'User' | 'Bot';
}

/** Represents repository metadata */
export interface GithubRepoInfo {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
  description: string;
}

/** Aggregated download statistics */
export interface DownloadStats {
  totalDownloads: number;
  latestReleaseDownloads: number;
  releaseCount: number;
}

/** API response wrapper for error handling */
export interface ApiResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  isRateLimited: boolean;
}
