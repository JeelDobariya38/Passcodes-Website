import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { GithubReleaseAsset } from '@/types/github';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = (bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0);
  return `${size} ${units[i]}`;
}

export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isNonAndroidDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  return !navigator.userAgent.toLowerCase().includes('android');
}

export function supportsViewTransitions(): boolean {
  if (typeof document === 'undefined') return false;
  return 'startViewTransition' in document;
}

/**
 * Pick the best APK asset for a release, preferring the *universal* build so a
 * normal user gets a one‑click download that works on any device (no GitHub
 * release page, no architecture guessing). Falls back gracefully.
 */
export function pickApkAsset(
  assets: GithubReleaseAsset[]
): GithubReleaseAsset | undefined {
  if (!assets?.length) return undefined;
  const apks = assets.filter(
    (a) =>
      a.name.toLowerCase().endsWith('.apk') ||
      a.content_type === 'application/vnd.android.package-archive'
  );
  if (!apks.length) return undefined;
  const universal = apks.find((a) =>
    a.name.toLowerCase().includes('universal')
  );
  return universal ?? apks[0];
}
