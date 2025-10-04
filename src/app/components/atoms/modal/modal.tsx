"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

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
    <div onClick={(e) => e.target === e.currentTarget && onClose()}>
      {/* タイトル */}
      <div className="flex justify-between">
        <h2 className="text-base font-bold">{title}</h2>
        <button
          className="outline: none; cursor-pointer transition-transform duration-300 hover:scale-110"
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
      </div>

      {/* 内容 */}
      <div>{children}</div>
    </div>
  );
}
