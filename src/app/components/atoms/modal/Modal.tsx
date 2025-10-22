"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import { useFadeInObserver } from "@/app/hooks/useFadeInObserver";

import styles from "./modal.module.scss";

// モーダル表示用（About Meで使用）

type ModalProps = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export default function Modal({ title, children, onClose, open }: ModalProps) {
  const closeBtnRef = useRef<HTMLDataListElement | null>(null);
  useFadeInObserver();

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
      className={`${styles.backdrop}`}
    >
      {/* タイトル */}
      <div className={`${styles.dialog} pc:p-6 p-4`}>
        <div className="fade_in_up pb-5">
          <h2 className="pc:ml-5 ml-3 text-base font-bold">{title}</h2>
        </div>

        <button
          className={`fade_in_up absolute top-4 right-4 z-50 cursor-pointer transition-transform duration-300 outline-none hover:scale-110 ${styles.close}`}
          type="button"
          onClick={onClose}
        >
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
