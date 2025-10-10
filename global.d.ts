// TypeScriptでCSSファイルをインポートしたときの型エラーを防ぐための宣言
// 例: `import "react-calendar/dist/Calendar.css";`
// 「このCSSモジュールは存在する」とTSに教えて、型チェックをしないようにする

declare module "*.css";

// global.d.ts
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/scrollbar";
declare module "swiper/css/effect-fade";
