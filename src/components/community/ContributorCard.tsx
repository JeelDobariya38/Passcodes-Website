import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import type { ContributorProfile } from "@/lib/contributors";
import Link from "next/link";

function Initials({ name }: { name: string }) {
    const initials = name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return (
        <span className="avatar-img avatar-fallback mb-0 text-base font-bold">
            {initials}
        </span>
    );
}

export function ContributorCard({
    c,
}: {
    c: ContributorProfile & { avatarUrl?: string };
}) {
    const avatarSrc = c.avatarUrl || c.avatar;
    const socials = [
        c.github ? { href: c.github, label: "GitHub", Icon: GithubIcon } : null,
        c.email
            ? { href: `mailto:${c.email}`, label: "Email", Icon: Mail }
            : null,
        c.linkedin
            ? { href: c.linkedin, label: "LinkedIn", Icon: LinkedinIcon }
            : null,
    ].filter(Boolean) as {
        href: string;
        label: string;
        Icon: (p: { className?: string }) => JSX.Element;
    }[];

    return (
        <div className="card group flex h-full flex-col items-center justify-between p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border)] hover:bg-[var(--card-bg-hover)]">
            <div className="flex w-full flex-col items-center">
                <div className="relative mb-3 flex items-center justify-center">
                    {avatarSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={avatarSrc}
                            alt={c.name}
                            className="avatar-img mb-0 shadow-sm transition-transform duration-200 group-hover:scale-[1.03]"
                            loading="lazy"
                        />
                    ) : (
                        <Initials name={c.name} />
                    )}
                </div>

                <h3 className="w-full truncate text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-light)] sm:text-base">
                    {c.name}
                </h3>
                <p className="role mt-0.5 w-full truncate text-xs text-[var(--text-muted)]">
                    {c.role || "Contributor"}
                </p>
            </div>

            {socials.length > 0 && (
                <div className="card-links mt-3 w-full justify-center border-t border-[var(--border-light)] pt-2.5">
                    {socials.map(({ href, label, Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            target={
                                href.startsWith("mailto:")
                                    ? undefined
                                    : "_blank"
                            }
                            rel={
                                href.startsWith("mailto:")
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            aria-label={`${c.name} on ${label}`}
                            title={label}
                            className="p-1.5 text-[var(--text-dim)] transition-colors hover:text-[var(--accent-light)]"
                        >
                            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
