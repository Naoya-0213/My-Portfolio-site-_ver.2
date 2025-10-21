import type { WorkContentsData } from "@/const/work/types/types";

export const money_mindfulContents: WorkContentsData = {
  id: "money_mindful",
  title: "貯金習慣化アプリ「がまん貯金」",
  badge: "個人開発",
  img: {
    sp: "/img/section_work/money_mindful/money_mindful__sp-design.png",
    // TODO：PC画面実装後変更
    pc: "/img/section_work/coming_soon/coming_soon_pc-screen.png",
  },

  sections: [
    {
      label: "概要",
      value: `日常の節約を“我慢の可視化”によって習慣化することを目的に開発した個人アプリ。Next.js（App Router構成）とSupabaseを用いて、認証・データ管理・グラフ表示などを実装。React Hook FormやZodを活用し、入力バリデーションやユーザー体験を重視した設計。UI/UXデザインにも注力し、モバイル中心の直感的な操作性を追求。`,
    },
    {
      label: "ターゲット",
      value:
        "節約意識はありながらも貯金を継続することが苦手な、20〜30代の一人暮らし社会人を想定。",
    },
    {
      label: "課題",
      value:
        "自分自身、貯金を習慣化することが苦手で、続けられる仕組みがほしいと感じていた。既存の家計簿アプリは数多くあるものの、どれも継続できなかった。原因は「貯金の習慣化」にあると考え、日々の我慢を可視化できるアプリを開発した。",
    },
    {
      label: "目的",
      value:
        "日常の中で我慢した支出を“見える化”することで、貯金を楽しみながら習慣化できる仕組みをつくること。",
    },
  ],

  refactoring: [
    {
      label: "PC画面へのレスポンシブ対応",
      value: "PCでも快適に操作できるレイアウトへ最適化。",
    },
    {
      label: "フォルダ管理機能の追加",
      value: "目標ごとに記録内容を整理できるフォルダを作成。",
    },
    {
      label: "達成バッジ機能の実装",
      value: "貯金額や記録日数に応じてバッジを付与。",
    },
    {
      label: "カテゴリー追加機能",
      value: "ユーザー自身でカテゴリーを作成・編集可能に。",
    },
    {
      label: "ダークモード対応",
      value: "好みに合わせて配色を切り替え可能に。",
    },
  ],

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
      label: "リニューアル更新",
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
      label: "https://github.com/Naoya-0213/money-mindful",
      href: "https://github.com/Naoya-0213/money-mindful",
    },
  ],

  // TODO リンク更新
  links: [
    {
      label: "https://moneymindful-gamma.vercel.app/money-mindful",
      href: "https://moneymindful-gamma.vercel.app/money-mindful",
    },
  ],
};
