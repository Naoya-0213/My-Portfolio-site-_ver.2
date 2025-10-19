import type { WorkContentsData } from "@/const/work/types/types";

export const sabolonContents: WorkContentsData = {
  id: "oha",
  title: "アクセサリーブランド架空サイト",
  badge: "制作課題",
  img: {
    sp: "/img/section_work/sabolon/sabolon__sp-design.png",
    pc: "/img/section_work/sabolon/sabolon__pc-design.png",
  },

  sections: [
    {
      label: "概要",
      value: `スクール（デイトラ）の課題として、架空のアクセサリーブランド「sabolon」のWebサイトを制作。デザインカンプをもとに、配色や余白など細部まで丁寧に再現し、視覚的な魅力と使いやすさを両立させた。学んだ技術を応用しながら、ブランドの世界観を表現したサイトとなっている。`,
    },
    {
      label: "ターゲット",
      value:
        "製品の購入を検討している既存顧客、およびアクセサリーの購入を検討している新規顧客。（想定）",
    },
    {
      label: "課題",
      value:
        "「sabolon」には製品専用のサイトや製品への想いを伝える場がなく、ブランドの魅力が十分に伝わっていなかった。そのため、購入機会の損失が目立っていた。（想定）",
    },
    {
      label: "目的",
      value:
        "製品専用サイトを通じて認知度を高めると同時に、ブランド理念に共感してもらうことで、既存顧客の維持はもちろん、新規顧客の獲得を目指す。（想定）",
    },
  ],

  // TODO 詳細時間記載
  scope: [
    {
      label: "コーディング",
      value: "1週間",
    },
    {
      label: "更新 / 修正",
      value: "1週間",
    },
    {
      label: "合計",
      value: "2週間",
    },
  ],
  tech: ["HTML", "css", "Sass"],
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
  ],
};
