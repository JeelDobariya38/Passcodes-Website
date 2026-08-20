import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    badge?: string;
    className?: string;
    id?: string;
    as?: "h1" | "h2";
    align?: "center" | "left";
    float?: boolean; // legacy compatibility
}

export function SectionHeader({
    title,
    subtitle,
    badge,
    className,
    id,
    as = "h2",
    align = "center",
}: SectionHeaderProps) {
    const Tag = as;
    const isCenter = align === "center";

    return (
        <div
            id={id}
            className={cn(
                "mb-8",
                isCenter ? "text-center" : "text-left",
                className
            )}
        >
            {badge && (
                <span className="editorial-badge mb-2.5 border border-[var(--border-light)] bg-[var(--card-bg)] text-[var(--accent-light)]">
                    {badge}
                </span>
            )}
            <Tag className={as === "h1" ? "page-title" : "section-title"}>
                {title}
            </Tag>
            {subtitle && (
                <p
                    className={cn(
                        "page-subtitle !mt-2",
                        !isCenter && "!mx-0 !text-left"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
