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

## 📐 Breakpoints (Sass ↔ Tailwind)

プロジェクトで使用するブレークポイント一覧です。  
SassとTailwindの両方で共通認識を持つために記載しています。

| 名前 | px範囲                          | Sass指定例                 | Tailwind指定例                    |
| ---- | ------------------------------- | -------------------------- | --------------------------------- |
| ssp  | 375px以下                       | `@include mq(ssp) { ... }` | `max-[374px]:...`                 |
| sm   | 640px以上（Tailwindデフォルト） | `@include mq(sm) { ... }`  | `sm:...`                          |
| sp   | 767px以下                       | `@include mq(sp) { ... }`  | `max-[767px]:...`                 |
| pc   | 768px以上                       | `@include mq(pc) { ... }`  | `md:...` or `pc:...`              |
| tb   | 768px〜899px                    | `@include mq(tb) { ... }`  | `min-[768px]:... max-[899px]:...` |

### メモ

- `sm` は Tailwind のデフォルト（640px以上）に揃えています。
- `pc` は Sassの `"screen and (min-width: 768px)"` と一致。
- `tb` のような範囲指定は Tailwindではカスタムブレークポイント（`min-[768px]` や `max-[899px]`）を使用します。
- SassとTailwindの両方で同じプロパティを重複定義しないよう注意。
