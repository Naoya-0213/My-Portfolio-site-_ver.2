import type { WorkContentsData } from "@/app/(naoya-portfolio)/work/types/types";

export const ohaContents: WorkContentsData = {
  id: "portfolio",
  title: "ポートフォリオサイト",
  badge: "個人制作",
  sections: [
    {
      label: "概要",
      value:
        "転職活動および実績掲載を目的としたポートフォリオサイトとして、デザイン設計からコーディング、デプロイまで一貫して自作しました。これまでに学んだ技術を応用し、動きや配色、余白などの細部までこだわりながら、見る人に自分の世界観や制作姿勢が伝わるサイトを目指して制作しています。",
    },
    { label: "ターゲット", value: "企業の採用担当者の方々" },
    {
      label: "課題",
      value:
        "自分のスキルや実績を効果的にアピールするための専用サイトがなく、これまでの学習内容や今後取り組みたい目標を一目で分かりやすくまとめたかった。",
    },
    {
      label: "目的",
      value:
        "スキルや実績を一元的に示す手段がなかったため、学習経過や今後の目標を可視化し、採用担当者に伝わる形で整理することが課題であった。",
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
