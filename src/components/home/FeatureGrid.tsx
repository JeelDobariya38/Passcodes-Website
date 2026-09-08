import {
    Lock,
    Smartphone,
    WifiOff,
    Code2,
    Fingerprint,
    RefreshCw,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const features = [
    {
        category: "Storage",
        icon: Lock,
        title: "On-Device Storage",
        description:
            "Your passwords live strictly on your device — never uploaded to any server or cloud database. Complete control over your stored credentials.",
    },
    {
        category: "Privacy",
        icon: WifiOff,
        title: "Designed for Offline Privacy",
        description:
            "No internet connection required for core password management. No cloud synchronization of your credentials.",
    },
    {
        category: "Security",
        icon: Fingerprint,
        title: "Biometric Authentication",
        description:
            "Protect access to Passcodes using device biometrics (fingerprint or face unlock) with configurable auto-lock.",
    },
    {
        category: "Architecture",
        icon: Smartphone,
        title: "Modern Material UI",
        description:
            "Engineered with Android Material Design 3 guidelines, gesture navigation, and split ABIs for minimal disk footprint.",
    },
    {
        category: "Transparency",
        icon: Code2,
        title: "100% Open Source",
        description:
            "Publicly auditable on GitHub under the MIT License. Built with community transparency and open development.",
    },
    {
        category: "Portability",
        icon: RefreshCw,
        title: "Import & Export",
        description:
            "Import and export compatible password data using Google Passwords CSV format. Easily manage and migrate your credentials.",
    },
];

export function FeatureGrid() {
    return (
        <section
            className="sm:py-18 px-4 py-14 sm:px-6"
            aria-labelledby="features-heading"
        >
            <div className="mx-auto max-w-6xl">
                <ScrollReveal>
                    <SectionHeader
                        badge="Core Architecture"
                        title="Engineered for Privacy & Control"
                        subtitle="Every architectural decision in Passcodes prioritizes user ownership, local storage, and technical transparency."
                    />
                </ScrollReveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, idx) => (
                        <ScrollReveal
                            key={feature.title}
                            delay={Math.min(idx * 40, 200)}
                        >
                            <div className="feature-card group flex h-full flex-col justify-between text-left">
                                <div>
                                    <div className="mb-3.5 flex items-center justify-between">
                                        <span className="feature-icon">
                                            <feature.icon
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <span className="editorial-badge border border-[var(--border-light)] bg-[var(--card-bg)] text-[var(--text-dim)]">
                                            {feature.category}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent-light)]">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
