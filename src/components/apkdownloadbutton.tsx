"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ApkDownloadButtonProps = {
  fallbackUrl?: string;
};

export function ApkDownloadButton({
  fallbackUrl = "https://github.com/JeelDobariya38/Passcodes/releases",
}: ApkDownloadButtonProps) {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchApk() {
      try {
        const res = await fetch(
          "https://api.github.com/repos/JeelDobariya38/Passcodes/releases/latest"
        );
        const data = await res.json();

        const asset = data.assets?.find(
          (a: any) =>
            a.name?.toLowerCase().includes("universal") &&
            a.name?.toLowerCase().endsWith(".apk")
        );

        if (asset?.browser_download_url) {
          setDownloadUrl(asset.browser_download_url);
        } else {
          setDownloadUrl(fallbackUrl);
        }
      } catch {
        setDownloadUrl(fallbackUrl);
      }
    }

    fetchApk();
  }, []);

  return (
    <Button size="lg" className="gap-2" disabled={!downloadUrl}>
      <Link
        className="flex items-center gap-2"
        href={downloadUrl || fallbackUrl}
        target="_blank"
      >
        <Download className="h-5 w-5" />
        Download APK
      </Link>
    </Button>
  );
}
