'use client';

import { useQuery } from '@tanstack/react-query';
import { getDownloadStats } from '@/lib/github';
import type { DownloadStats } from '@/types/github';

/** Fetch aggregated download statistics */
export function useDownloadCount() {
  return useQuery<DownloadStats, Error>({
    queryKey: ['github', 'downloads', 'stats'],
    queryFn: getDownloadStats,
  });
}
