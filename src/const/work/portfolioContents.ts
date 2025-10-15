import type { WorkContentsData } from "@/app/(naoya-portfolio)/work/types/types";

export const portfolioContents: WorkContentsData = {
  id: "portfolio",
  title: "ポートフォリオサイト",
  badge: "個人制作",
  sections: [
    {
      label: "概要",
      value:
        "実績掲載用のポートフォリオサイトとして、デザイン設計からコーディング、公開まで一貫して自作しました。これまで学んだ技術を応用し、動きのある見やすいサイトを意識して制作しました。",
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
        "転職活動において書類選考の通過を目指し、採用担当者の方々に向けて実績や今後の学習計画をしっかりと示すことで、実務未経験であっても自分のポテンシャルを感じていただけるようにしたい。",
    },
    { label: "", value: "" },
    { label: "", value: "" },
  ],
  scope: [
    "サイトデザイン作成",
    "コーディング",
    "サーバー取得/サイト公開",
    "サイト更新＆修正",
  ],
  tech: ["Next.js", "React", "TypeScript", "Tailwind", "Sass", "Swiper"],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Naoya-0213/My-Portfolio-site-_ver.2",
    },
  ],
};

// export const portfolioContents: WorkContentsData = {
//   id: "portfolio",
//   title: "ポートフォリオサイト",
//   badge: "個人制作",
//   sections: [
//     { label: "", value: "" },
//     { label: "", value: "" },
//     { label: "", value: "" },
//   ],
//   scope: [],
//   tech: [],
//   links: [{ label: "", href: "" }],
// };
