'use client';

import { useQuery } from '@tanstack/react-query';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ContributorCard } from '@/components/community/ContributorCard';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ButtonLink } from '@/components/ui/Button';
import { getContributors, getRepoInfo } from '@/lib/github';
import {
  FEATURED_CONTRIBUTORS,
  type ContributorProfile,
} from '@/lib/contributors';
import { GITHUB_REPO_URL } from '@/lib/constants';
import { formatNumber } from '@/lib/utils';
import { Star, GitFork, Users } from 'lucide-react';

type Display = ContributorProfile & { avatarUrl?: string };

export function CommunityContent() {
  const { data: contributors, isLoading } = useQuery({
    queryKey: ['github', 'contributors'],
    queryFn: getContributors,
  });
  const { data: repoInfo } = useQuery({
    queryKey: ['github', 'repo-info'],
    queryFn: getRepoInfo,
  });

  const featuredLogins = new Set(
    FEATURED_CONTRIBUTORS.map((c) => c.login?.toLowerCase()).filter(
      Boolean
    ) as string[]
  );
  const apiExtra: Display[] = (contributors ?? [])
    .filter(
      (a) => a.type !== 'Bot' && !featuredLogins.has(a.login.toLowerCase())
    )
    .map((a) => ({
      name: a.login,
      role: 'Contributor',
      login: a.login,
      github: a.html_url,
      avatarUrl: a.avatar_url,
    }));

  const featured: Display[] = FEATURED_CONTRIBUTORS.map((c) => {
    const api = contributors?.find(
      (a) => c.login && a.login.toLowerCase() === c.login.toLowerCase()
    );
    return {
      ...c,
      avatarUrl: c.avatar ?? api?.avatar_url,
      github: c.github ?? api?.html_url,
    };
  });

  const all = [...featured, ...apiExtra];

  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          as="h1"
          float
          title="Community"
          subtitle="Passcodes is built by the community, for the community. Every contribution matters."
        />

        {repoInfo && (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stat-badge">
              <Star className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
              <strong className="text-[var(--text)]">
                {formatNumber(repoInfo.stargazers_count)}
              </strong>{' '}
              stars
            </span>
            <span className="stat-badge">
              <GitFork className="h-4 w-4" aria-hidden="true" />
              <strong className="text-[var(--text)]">
                {formatNumber(repoInfo.forks_count)}
              </strong>{' '}
              forks
            </span>
            <span className="stat-badge">
              <Users
                className="h-4 w-4"
                style={{ color: 'var(--accent-light)' }}
                aria-hidden="true"
              />
              <strong className="text-[var(--text)]">{all.length}</strong>{' '}
              contributors
            </span>
          </div>
        )}

        {isLoading ? (
          <LoadingSpinner label="Loading contributors..." />
        ) : (
          <div className="community-container">
            {all.map((c, i) => (
              <ContributorCard key={`${c.login ?? c.name}-${i}`} c={c} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-[var(--text-muted)]">
            Want to contribute? We welcome bug reports, feature requests, and
            pull requests.
          </p>
          <ButtonLink
            href={`${GITHUB_REPO_URL}/blob/main/CONTRIBUTING.md`}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Read Contributing Guide
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
