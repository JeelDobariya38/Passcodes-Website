import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import {
  NAV_ROUTES,
  GITHUB_REPO_URL,
  GITHUB_ORG,
  LICENSE_URL,
  USER_GUIDE_URL,
} from '@/lib/constants';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-6">
        <div className="mb-4 flex items-center justify-center gap-2.5 text-lg font-bold">
          <Logo className="h-8 w-8 rounded-lg" />
          <span>Passcodes</span>
        </div>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {NAV_ROUTES.map((route) => (
            <Link key={route.href} href={route.href}>
              {route.label}
            </Link>
          ))}
          <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
            Source
          </a>
          <a href={USER_GUIDE_URL} target="_blank" rel="noopener noreferrer">
            Docs
          </a>
          <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer">
            License
          </a>
        </div>
        <div className="text-sm" style={{ color: 'var(--footer-muted)' }}>
          Copyright &copy; Jeel Dobariya 2025-2026
        </div>
      </div>
    </footer>
  );
}
