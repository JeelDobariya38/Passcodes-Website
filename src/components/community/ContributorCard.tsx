import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import type { ContributorProfile } from '@/lib/contributors';

function Initials({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return <span className="avatar-img avatar-fallback text-xl">{initials}</span>;
}

export function ContributorCard({
  c,
}: {
  c: ContributorProfile & { avatarUrl?: string };
}) {
  const socials = [
    c.github ? { href: c.github, label: 'GitHub', Icon: GithubIcon } : null,
    c.email ? { href: `mailto:${c.email}`, label: 'Email', Icon: Mail } : null,
    c.linkedin
      ? { href: c.linkedin, label: 'LinkedIn', Icon: LinkedinIcon }
      : null,
  ].filter(Boolean) as {
    href: string;
    label: string;
    Icon: (p: { className?: string }) => JSX.Element;
  }[];

  return (
    <div className="card flex flex-col items-center text-center">
      {c.avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={c.avatarUrl}
          alt={c.name}
          className="avatar-img"
          loading="lazy"
        />
      ) : (
        <Initials name={c.name} />
      )}
      <h3 className="text-lg font-semibold">{c.name}</h3>
      <p className="role">{c.role}</p>
      {socials.length > 0 && (
        <div className="card-links">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={
                href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
              }
              aria-label={`${c.name} on ${label}`}
              title={label}
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
