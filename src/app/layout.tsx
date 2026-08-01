import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { QueryProvider } from "@/providers/QueryProvider";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { GithubStarDialog } from "@/components/shared/GithubStarDialog";
import { SITE_META } from "@/lib/constants";
import { PowerShortcuts } from "@/components/layout/PowerShortcuts";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: { default: SITE_META.title, template: "%s | Passcodes" },
    description: SITE_META.description,
    metadataBase: new URL(SITE_META.url),
    openGraph: {
        title: SITE_META.title,
        description: SITE_META.description,
        url: SITE_META.url,
        siteName: "Passcodes",
        images: [{ url: SITE_META.ogImage, width: 1200, height: 630 }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_META.title,
        description: SITE_META.description,
        images: [SITE_META.ogImage],
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={spaceGrotesk.className}
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
                />
            </head>
            <body className="antialiased" suppressHydrationWarning>
                <ThemeProvider>
                    <QueryProvider>
                        <div className="flex min-h-screen flex-col">
                            <Navbar />
                            <main className="flex-1">
                                <PageTransition>{children}</PageTransition>
                            </main>
                            <Footer />
                        </div>
                        <GithubStarDialog />
                        <PowerShortcuts />
                    </QueryProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
