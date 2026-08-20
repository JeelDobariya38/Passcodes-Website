import type { Metadata } from "next";
import { DownloadsContent } from "@/components/downloads/DownloadsContent";

export const metadata: Metadata = {
    title: "Downloads",
    description:
        "Download the latest version of Passcodes for Android. Free, open-source, and always up to date.",
};

export default function DownloadsPage() {
    return <DownloadsContent />;
}
