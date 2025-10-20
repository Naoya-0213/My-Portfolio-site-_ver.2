type types = {
  title: string;
  icon: string;
  text: string;
};

export const skillCard: types[] = [
  {
    title: "Web制作",
    icon: "/img/section_skill/code_icon.png",
    text: "React・Next.jsを用いたモダンなWebサイト制作に対応。デザインカンプを忠実に再現し、レスポンシブ対応や保守性を意識した分かりやすいコーディングを心がけています。",
  },
  {
    title: "アプリ開発",
    icon: "/img/section_skill/app_icon.png",
    text: "React・Next.jsを用いたWebアプリ開発に対応。個人開発では、節約習慣化アプリを設計から実装まで一貫して制作。UI/UXを意識した実装や、Supabaseを利用したデータベース連携も行えます。",
  },
  {
    title: "改修 / 保守",
    icon: "/img/section_skill/light_icon.png",
    text: "既存のサイトやアプリの修正・機能追加・リファクタリングに対応します。柔軟かつ丁寧に改善を行い、小規模から大規模まで、保守性を意識した改修を実現します。",
  },
];
