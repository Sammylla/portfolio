import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "koha_koppepan portfolio",
  description: "東京を拠点に活動するデザイナー／デベロッパーのポートフォリオ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
