import type { WorkContentsData } from "@/app/(naoya-portfolio)/work/types/types";

export const portfolioContents: WorkContentsData = {
  id: "portfolio",
  title: "ポートフォリオサイト",
  badge: "個人制作",
  sections: [
    {
      label: "概要",
      value:
        "転職活動および実績掲載を目的としたポートフォリオサイトとして、デザイン設計からコーディング、デプロイまで一貫して自作。これまでに学んだ技術を応用し、動きや配色、余白などの細部までこだわりながら、見る人に自分の世界観や制作姿勢が伝わるサイトを目指して制作。",
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
  scope: [
    "サイトデザイン作成",
    "コーディング",
    "サーバー取得/サイト公開",
    "サイト更新＆修正",
  ],
  tech: ["Next.js", "React", "TypeScript", "Tailwind", "Sass", "Swiper"],
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
