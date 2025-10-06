"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import styles from "./modal.module.scss";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export default function Modal({ title, children, onClose, open }: ModalProps) {
  const closeBtnRef = useRef<HTMLDataListElement | null>(null);

  // 背面スクロール固定
  useEffect(() => {
    document.body.classList.toggle("is_lock", open);
    return () => document.body.classList.remove("is_lock");
  }, [open]);

  // ESC で閉じる
  useEffect(() => {
    if (!open) return;
    const onkey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onkey);
    return () => document.removeEventListener("keydown", onkey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className={`${styles.backdrop} `}
    >
      {/* タイトル */}
      <div className={`${styles.dialog}`}>
        <div className="pb-6">
          <h2 className="text-base font-bold">{title}</h2>
        </div>

        <button
          className={`absolute top-4 right-4 z-50 cursor-pointer transition-transform duration-300 outline-none hover:scale-110 ${styles.close}`}
          type="button"
          onClick={onClose}
        >
          {/* TODO　ボタンをabsoluteで変更予定 */}
          <Image
            src="/img/section_aboutme/modal-close-icon.png"
            alt="モーダル閉じるボタン"
            width={40}
            height={40}
          ></Image>
        </button>
        {/* 内容 */}
        <div className={styles.dialogBody}>{children}</div>
      </div>
    </div>
  );
}
