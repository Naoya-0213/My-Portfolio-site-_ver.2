"use client";

import styles from "../hamburger_buttton/hamburger.module.scss";

type Props = {
  open: boolean;
  onClick: () => void;
};
export default function HamburgerButton({ open, onClick }: Props) {
  return (
    <button
      // id="js-drawer-icon"

      // 音声対応は下記を追加↓
      // 1) aria-controls="js-drawer__menu" →クラス名指定はよくないかも。
      // 2) aria-expanded={open}
      // 3) aria-label={open ? "メニューを閉じる" : "メニューを開く"}
      className={`${styles.header_open} ${open ? styles.is_checked : ""}`}
      onClick={onClick}
    >
      <span className={styles.drawer_icon__bar} />
      <span className={styles.drawer_icon__bar} />
    </button>
  );
}
