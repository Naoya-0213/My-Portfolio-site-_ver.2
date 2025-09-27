// ===== Tailwind CSS 設定ファイル =====
// 📍このファイルは Tailwind CSS の設定を行う
// - screens: 各デバイス幅に応じたブレークポイントを定義
// - theme.extend: デフォルト設定に独自の拡張を追加
// - plugins: Tailwind のプラグインを追加する場所
//
// ESLint のルール (import/no-anonymous-default-export) に従うため、
// 設定オブジェクトを `config` 変数に代入してから export

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tb: { min: "768px", max: "1023px" }, // タブレット
        pc: "1024px", // PC以上
      },
    },
  },
  plugins: [],
};

export default config;
