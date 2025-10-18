import type { WorkContentsData } from "@/app/(naoya-portfolio)/work/types/types";

export const onomichiContents: WorkContentsData = {
  id: "oha",
  title: "架空キャンペーン「Onomachi」詳細サイト",
  badge: "制作課題",
  img: {
    sp: "/img/section_work/onomichi/onomichi__sp-design.png",
    pc: "/img/section_work/onomichi/onomichi__pc-design.png",
  },

  sections: [
    {
      label: "概要",
      value: `スクール（デイトラ）の課題として、観光と地域振興をテーマにした架空キャンペーン「Onomachi」の詳細サイトを制作。デザインカンプをもとに、配色や余白など細部まで丁寧に再現し、魅力的な体験を想起させる構成を意識して実装した。学んだ技術を応用しながら、地域の魅力を伝えるデザインを表現したサイトとなっている。`,
    },
    {
      label: "ターゲット",
      value:
        "観光地の魅力を発信し、訪問者の興味を引く20～40代の旅行者層（想定）",
    },
    {
      label: "課題",
      value:
        "尾道市の観光客集客を目的としたInstagramを活用したプレゼント企画を実施。しかし、企画の内容や趣旨を伝える専用サイトが存在せず、認知拡大の機会を十分に活用できていなかった。（想定）",
    },
    {
      label: "目的",
      value:
        "専用サイトを制作し、企画の内容や趣旨を広く認知してもらうとともに、尾道市の魅力を発信する仕組みを構築することで、地域の観光資源の認知拡大を図る。（想定）",
    },
  ],

  // TODO 詳細時間記載
  scope: [
    {
      label: "コーディング",
      value: "90時間",
    },
    {
      label: "更新 / 修正",
      value: "10時間",
    },
    {
      label: "合計",
      value: "100時間",
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
