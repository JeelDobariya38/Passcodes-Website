import type { Metadata } from 'next';
import { CommunityContent } from '@/components/community/CommunityContent';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Meet the contributors behind Passcodes. Join our open-source community on GitHub.',
};

export default function CommunityPage() {
  return <CommunityContent />;
}
