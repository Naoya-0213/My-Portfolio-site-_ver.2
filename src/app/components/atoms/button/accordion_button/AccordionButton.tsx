"use client";

import { type ReactNode, useState } from "react";

import styles from "./accordionButton.module.scss";

type AccordionButton = {
  title: string;
  titleColor: string;
  children: ReactNode;
};

const AccordionButton = ({ title, titleColor, children }: AccordionButton) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ボタン部分 */}
      <button
        className={`${styles.accordion__button}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={
            isOpen
              ? `${styles.accordion__icon} ${styles.is_open}`
              : `${styles.accordion__icon} `
          }
        ></span>
        <span className={titleColor}>{title}</span>
      </button>

      {/* 開閉コンテンツ */}
      <div
        className={`${styles.accordion__content} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionButton;
