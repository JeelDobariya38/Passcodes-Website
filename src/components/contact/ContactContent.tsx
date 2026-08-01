"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import {
    GithubIcon,
    DiscordIcon,
    TelegramIcon,
} from "@/components/ui/BrandIcons";
import {
    GITHUB_REPO_URL,
    DISCORD_URL,
    TELEGRAM_URL,
    CONTACT_EMAIL,
    USER_GUIDE_URL,
} from "@/lib/constants";
import { Bug, MessageSquare, BookOpen, Mail } from "lucide-react";

const contactOptions = [
    {
        Icon: Bug,
        title: "Report a Bug",
        description:
            "Found something broken? Open an issue on GitHub and we'll investigate.",
        href: `${GITHUB_REPO_URL}/issues/new?template=bug_report.md`,
        label: "Open Issue",
    },
    {
        Icon: MessageSquare,
        title: "Start a Discussion",
        description:
            "Have a question or idea? Start a discussion in our GitHub repository.",
        href: `${GITHUB_REPO_URL}/discussions`,
        label: "Discuss",
    },
    {
        Icon: DiscordIcon,
        title: "Join Discord",
        description:
            "Chat with the community and the maintainers in real time.",
        href: DISCORD_URL,
        label: "Open Discord",
    },
    {
        Icon: TelegramIcon,
        title: "Telegram",
        description:
            "Join our Telegram channel for updates and quick announcements.",
        href: TELEGRAM_URL,
        label: "Open Telegram",
    },
    {
        Icon: BookOpen,
        title: "Read the Docs",
        description:
            "Check our documentation repository for guides, FAQs, and contributing info.",
        href: USER_GUIDE_URL,
        label: "View Docs",
    },
    {
        Icon: Mail,
        title: "Email Us",
        description:
            "For private inquiries or security reports, reach out via email.",
        href: `mailto:${CONTACT_EMAIL}`,
        label: "Send Email",
        mail: true,
    },
];

export function ContactContent() {
    return (
        <div className="px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-4xl">
                <SectionHeader
                    as="h1"
                    float
                    title="Contact Us"
                    subtitle="We're an open-source project. Reach us on GitHub, Discord, Telegram, or email."
                />
                <div className="grid gap-5 sm:grid-cols-2">
                    {contactOptions.map((option) => (
                        <div
                            key={option.title}
                            className="card flex flex-col text-left"
                        >
                            <span className="feature-icon mb-4">
                                <option.Icon className="h-6 w-6" />
                            </span>
                            <h3 className="text-lg font-semibold">
                                {option.title}
                            </h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                                {option.description}
                            </p>
                            <div className="mt-4">
                                <ButtonLink
                                    href={option.href}
                                    target={option.mail ? undefined : "_blank"}
                                    rel={
                                        option.mail
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    variant="secondary"
                                    size="sm"
                                >
                                    {option.label}
                                </ButtonLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
