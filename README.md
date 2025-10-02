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

# 📐 Breakpoints 対応表 (Sass / Tailwind)

| 名前  | 幅の範囲   | Sass指定           | Tailwind指定 |
| ----- | ---------- | ------------------ | ------------ |
| `ssp` | 375px以下  | `@include mq(ssp)` | `ssp:`       |
| `sm`  | 640px以上  | `@include mq(sm)`  | `sm:`        |
| `sp`  | 767px以下  | `@include mq(sp)`  | `sp:`        |
| `pc`  | 768px以上  | `@include mq(pc)`  | `pc:`        |
| `tb`  | 768〜899px | `@include mq(tb)`  | `tb:`        |

---

📌 **補足**

- `sm` は Sass / Tailwind 共通で **640px以上** に統一。
- `ssp` や `sp` は **max指定**。
- `tb` は **768〜899px** の範囲指定。
