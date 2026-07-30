'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_ROUTES, GITHUB_REPO_URL } from '@/lib/constants';
import { useActiveNav } from '@/hooks/useActiveNav';
import { Logo } from '@/components/layout/Logo';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isActive } = useActiveNav();

  return (
    <header className="nav-shell sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-2.5 text-lg font-bold"
          aria-label="Passcodes Home"
        >
          <Logo className="h-10 w-10 rounded-xl" />
          <span>Passcodes</span>
        </Link>

        <ul className="hidden items-center gap-1.5 md:flex" role="menubar">
          {NAV_ROUTES.map((route) => (
            <li key={route.href} role="none">
              <Link
                href={route.href}
                role="menuitem"
                className={cn(
                  'nav-btn text-sm',
                  isActive(route.href) && 'active-nav'
                )}
                aria-current={isActive(route.href) ? 'page' : undefined}
              >
                {route.label}
              </Link>
            </li>
          ))}
          <li role="none">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn"
              aria-label="GitHub repository"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </li>
          <li role="none">
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="nav-btn !px-3 !py-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-[var(--border-light)] px-4 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1.5" role="menu">
            {NAV_ROUTES.map((route) => (
              <li key={route.href} role="none">
                <Link
                  href={route.href}
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'nav-btn w-full text-base',
                    isActive(route.href) && 'active-nav'
                  )}
                  aria-current={isActive(route.href) ? 'page' : undefined}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li role="none">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-btn w-full"
              >
                <GithubIcon className="h-4 w-4" /> View on GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
