import type { WorkContentsData } from "@/app/(naoya-portfolio)/work/types/types";

export const portfolioContents: WorkContentsData = {
  id: "portfolio",
  title: "ポートフォリオサイト",
  badge: "個人制作",
  img: {
    sp: "/img/section_work/portfolio/portfolio__sp-design.png",
    pc: "/img/section_work/portfolio/portfolio__pc-design.png",
  },

  sections: [
    {
      label: "概要",
      value: `転職活動および実績掲載を目的としたポートフォリオサイトとして、デザイン設計からコーディング、デプロイまで一貫して自作。学んだ技術を応用し、動きや配色、余白など細部までこだわりながら、自分の世界観と制作姿勢を表現した。\n\n2025年10月には ver.2 として、HTML / CSS ベースで構築していた既存サイトを Next.js × React で再構築。`,
    },
    { label: "ターゲット", value: "企業の採用担当者の方々" },
    {
      label: "課題",
      value:
        "自分のスキルや実績を効果的にアピールするための専用サイトがなく、これまでの学習内容や今後取り組みたい目標を一目で分かりやすく整理・提示する必要があった。",
    },
    {
      label: "目的",
      value:
        "転職活動において書類選考の通過を目指し、採用担当者の方々に向けて実績や今後の学習計画をしっかりと示すことで、未経験であっても自分のポテンシャルを感じていただけるようにしたい。",
    },
  ],

  // TODO 詳細時間記載
  scope: [
    {
      label: "構成 / デザイン作成",
      value: "62時間",
    },
    {
      label: "コーディング",
      value: "72時間",
    },
    {
      label: "Next.jsによるリニューアル更新",
      value: "60時間",
    },
    {
      label: "合計",
      value: "〇〇時間",
    },
  ],
  tech: ["Next.js", "React", "TypeScript", "Tailwind", "Sass", "Swiper"],
  tools: [
    {
      label: "デザイン",
      value: [{ item: "Canva" }, { item: "Figma" }],
    },
    {
      label: "開発環境",
      value: [{ item: "Visual Studio Code" }],
    },
    {
      label: "開発支援",
      value: [
        { item: "Chrome DevTools" },
        { item: "Terminal (zsh)" },
        { item: "ESLint" },
        { item: "Prettier" },
      ],
    },
    {
      label: "コーディング",
      value: [{ item: "GitHub" }, { item: "Vercel" }, { item: "npm" }],
    },
  ],
  github: [
    {
      label: "https://github.com/Naoya-0213/My-Portfolio-site-_ver.2",
      href: "https://github.com/Naoya-0213/My-Portfolio-site-_ver.2",
    },
  ],

  // TODO リンク更新
  links: [
    {
      label: "https://github.com/Naoya-0213/My-Portfolio-site-_ver.2",
      href: "https://github.com/Naoya-0213/My-Portfolio-site-_ver.2",
    },
  ],
};
