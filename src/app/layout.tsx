import type { Metadata } from "next";
import { Noto_Sans_JP, Oswald } from "next/font/google";

// app/layout.tsx の先頭あたり

import "./styles/_common-css.scss";
import "./styles/globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Portfolio site by Naoya",
  description:
    "転職活動用ポートフォリオサイトです。フロントエンドエンジニアを目指して学習を進めており、現在は React / Next.js を中心に取り組んでいます。これまで学んだスキルや制作物をまとめ、実践的なアウトプットとして公開しています。",
  openGraph: {
    title: "Portfolio site by Naoya",
    description:
      "フロントエンドエンジニアを目指して学習中。React / Next.js で制作したポートフォリオです。",
    // TODO　デプロイ後に変更予定
    // TODO　Xでカード確認
    url: "https://your-portfolio.vercel.app",
    siteName: "Naoya Portfolio",
    images: [
      {
        url: "/img/ogp/ogp.png", // OGP用画像
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio site by Naoya",
    description: "React / Next.js で制作したポートフォリオです。",

    images: ["/img/ogp/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`bg-[#f3f0eb] leading-relaxed font-normal text-[#795549] ${noto.variable} ${oswald.variable}`}
    >
      <body className="pc:text-[15px] text-sm">{children}</body>
    </html>
  );
}
