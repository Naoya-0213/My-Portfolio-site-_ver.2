"use client";

import { type ReactNode, useRef, useState } from "react";
import styles from "./accordionButton.module.scss";

type AccordionButtonProps = {
  title: string;
  titleColor: string; 
  children: ReactNode;
  /** 例: 0.5 (秒). 未指定ならデフォルト */
  durationSec?: number;
};

const AccordionButton = ({
  title,
  titleColor,
  children,
  durationSec = 0.5,
}: AccordionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = contentRef.current;
    if (!el) return;

    // 毎回、CSS変数で速度を上書き（SCSS側のtransitionがこの値を読む）
    el.style.setProperty("--acc-duration", `${durationSec}s`);

    if (isOpen) {
      // ---- 閉じるアニメーション ----
      // 現在の高さを固定してから0へ
      const current = el.scrollHeight;
      el.style.height = current + "px";
      // リフロー後に0へ（アニメ有効化）
      requestAnimationFrame(() => {
        el.style.height = "0px";
      });
      setIsOpen(false);
    } else {
      // ---- 開くアニメーション ----
      // まず高さを0にリセット（初回などのため）
      el.style.height = "0px";
      // リフローを挟んでから scrollHeight まで伸ばす
      requestAnimationFrame(() => {
        const target = el.scrollHeight;
        el.style.height = target + "px";
      });

      // アニメ完了後にheight:autoへ解放（中身が後から伸縮しても自然に追従）
      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== "height") return;
        el.style.height = "auto";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);

      setIsOpen(true);
    }
  };

  return (
    <div className={styles.accordion}>
      {/* ボタン */}
      <button
        type="button"
        className={styles.accordion__button}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="acc-content"
      >
        <span
          className={
            isOpen
              ? `${styles.accordion__icon} ${styles.is_open}`
              : styles.accordion__icon
          }
          aria-hidden
        />
        <span className={titleColor}>{title}</span>
      </button>

      {/* 開閉コンテンツ */}
      <div
        id="acc-content"
        ref={contentRef}
        className={`${styles.accordion__content} ${
          isOpen ? styles.open : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionButton;