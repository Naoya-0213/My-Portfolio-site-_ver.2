"use client";

import styles from "../organisms/header/header.module.scss";

type Props = {
  open: boolean;
  onClick: () => void;
};
export default function HamburgerButton({ open, onClick }: Props) {
  return (
    <button
      id="js-drawer-icon"
      className={`${styles.header_open} ${open ? styles.is_checked : ""}`}
      aria-controls="js-drawer__menu"
      aria-expanded={open}
      aria-label={open ? "メニューを閉じる" : "メニューを開く"}
      onClick={onClick}
    >
      <span className={styles.drawer_icon__bar} />
      <span className={styles.drawer_icon__bar} />
    </button>
  );
}
