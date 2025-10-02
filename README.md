# Naoya's Portfolio Site

このリポジトリは、私「Naoya」が作成したポートフォリオサイトのソースコードです。
転職活動の一環および私のスキルの証明として、デザインからコーディング、公開までを一貫して行いました。

2025 年 9 月より、"TypeScript" / "React" / "Next.js" を用いて、サイトをリニューアル中。

📍 **サイト公開 URL**  
（未公開）

🛠 **制作期間**  
ver.1
2024 年 12 月 〜 2025 年 1 月
　・"HTML"＆"css（sass）"/ "jQuery"

ver.2
2025 年 9 月 〜
　・"TypeScript" / "React" / "Next.js"

## 🔧 使用技術

- HTML / CSS / Sass
- JavaScript（jQuery）
- Swiper.js（スライダー）
- GSAP（アニメーション）
<!-- TODO更新 -->

## 📂 ページ構成

- トップページ：自己紹介、スキル紹介、制作実績、連絡先など
- 各実績詳細ページ：`/work/` 以下に個別 HTML で構成

## 🎯 このサイトの目的

- 転職活動における実績紹介
- Web 制作・コーディングのアウトプット
- 今後の Web エンジニアとしての成長を記録・公開する場

---

## 📐 Breakpoints 一覧（Sass & Tailwind）

| 名前  | Sass定義 | 意味 | Tailwind対応 |
|-------|----------|------|--------------|
| `ssp` | `not screen and (min-width: 375px)` | **375px以下**（超小型SP向け） | なし |
| `sm`  | `screen and (min-width: 640px)` | **640px以上**（Tailwind `sm` と同じ） | `sm:` |
| `sp`  | `not screen and (min-width: 767px)` | **767px以下**（スマホ全般） | なし |
| `pc`  | `screen and (min-width: 768px)` | **768px以上**（PC表示） | `md:` |
| `tb`  | `screen and (min-width: 768px) and (max-width: 899px)` | **768〜899px**（タブレット表示） | `min-[768px] max-[899px]` |

---

### ✅ Sassでの使い方
```scss
@include breakpoints.mq(sm) {
  margin-top: 40px;
}
@include breakpoints.mq(pc) {
  margin-top: 50px;
}
