export const GITHUB_ORG = 'PasscodesApp';
export const GITHUB_REPO = 'Passcodes';
export const GITHUB_API_BASE = 'https://api.github.com';
export const REPO_PATH = `${GITHUB_ORG}/${GITHUB_REPO}`;

export const API_ENDPOINTS = {
  latestRelease: `${GITHUB_API_BASE}/repos/${REPO_PATH}/releases/latest`,
  allReleases: `${GITHUB_API_BASE}/repos/${REPO_PATH}/releases`,
  contributors: `${GITHUB_API_BASE}/repos/${REPO_PATH}/contributors`,
  repoInfo: `${GITHUB_API_BASE}/repos/${REPO_PATH}`,
} as const;

export const NAV_ROUTES = [
  { label: 'Home', href: '/' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Community', href: '/community' },
  { label: 'Contact Us', href: '/contact' },
] as const;

export const SITE_META = {
  title: 'Passcodes - Secure Password Manager for Android',
  description:
    'Passcodes is a free, open-source password manager for Android. Securely store and manage your passwords locally on your device.',
  url: 'https://passcodesapp.github.io/Passcodes-Website',
  ogImage: '/og-image.png',
  twitterHandle: '@PasscodesApp',
} as const;

export const GITHUB_REPO_URL = `https://github.com/${REPO_PATH}`;

/** Corrected license path */
export const LICENSE_URL = `${GITHUB_REPO_URL}/blob/main/LICENSE.txt`;

/** Docs / User Guide (installation guide) */
export const USER_GUIDE_URL =
  'https://passcodesapp.github.io/Passcodes-Docs/user-docs/installing/';

/** Contact email */
export const CONTACT_EMAIL = 'jeeldobariya38@gmail.com';

/** Local logo asset — drop your logo file at public/logo.png */
export const LOGO_SRC = `${process.env.BASE_PATH || ''}/logo.png`;

/** Komi Store "Get it on" badge image — drop the old banner at public/komi-badge.png.
 *  If the file is missing, the Downloads page falls back to a text button (no broken image). */
export const KOMI_BADGE_SRC = `${process.env.BASE_PATH || ''}/komi-store-badge.png`;

/** Community / store links */
export const DISCORD_URL = 'https://discord.gg/kSSkYq7KAQ';
export const TELEGRAM_URL = 'https://t.me/passcodescommunity';
export const KOMI_STORE_URL =
  'https://komistore.app/app/?repo=PasscodesApp/Passcodes';

export const RATE_LIMIT_THRESHOLD = 10;
