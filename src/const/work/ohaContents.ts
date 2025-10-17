import type { WorkContentsData } from "@/app/(naoya-portfolio)/work/types/types";

export const ohaContents: WorkContentsData = {
  id: "oha",
  title: "架空アプリ「Oha!」紹介サイト",
  badge: "制作課題",
  sections: [
    {
      label: "概要",
      value:
        "スクール（デイトラ）の課題として、架空アプリ「Oha!」の紹介サイトを制作。問い合わせフォームやSwiper、アコーディオンメニューなどの動的な要素を取り入れ、これまでに学んだ技術を応用しながら、視覚的な魅力と使いやすさを両立させたサイトを目指して制作した。",
    },
    {
      label: "ターゲット",
      value:
        "新リリースアプリ「oha!」の存在は知っているが詳細を知らない人、または当サイトで初めてその存在に触れる人向け。主にスマートフォンユーザー（主に20～30代の若年層を想定）",
    },
    {
      label: "課題",
      value:
        "「Oha！」の特設サイトが未公開であり、リリース済みながらも認知度が低く、ダウンロード数の伸びが停滞している状況。（想定）",
    },
    {
      label: "目的",
      value:
        "サイトを通じて、「Oha！」の内容や開発の想いを伝え、存在を認知させることでダウンロードと使用を促進する。（想定）",
    },

    // TODO ツール、制作期間
  ],
  scope: ["デザインカンプからのコーディング", "コーディング"],
  tech: ["HTML", "css", "sass"],
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
