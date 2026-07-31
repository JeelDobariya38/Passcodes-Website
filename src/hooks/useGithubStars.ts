'use client';

import { useState, useEffect, useCallback } from 'react';
import { getRepoInfo } from '@/lib/github';
import type { GithubRepoInfo } from '@/types/github';

/**
 * Manages the GitHub Star dialog state.
 * Shows dialog after a delay, only once per session (sessionStorage).
 */
export function useGithubStars() {
  const [repoInfo, setRepoInfo] = useState<GithubRepoInfo | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('github-star-dialog-shown');
    if (hasShown) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowDialog(true);
      sessionStorage.setItem('github-star-dialog-shown', 'true');
    }, 15000);

    getRepoInfo()
      .then(setRepoInfo)
      .catch(() => {})
      .finally(() => setIsLoading(false));

    return () => clearTimeout(timer);
  }, []);

  const closeDialog = useCallback(() => {
    setShowDialog(false);
  }, []);

  return {
    repoInfo,
    showDialog,
    isLoading,
    closeDialog,
  };
}
