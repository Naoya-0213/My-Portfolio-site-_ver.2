"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { NAV, SNS } from "@/app/constants/nav";
import { useMedia } from "@/app/hooks/useMedia";

import HamburgerButton from "../../atoms/hamburger_buttton/HamburgerButton";
import NavList from "../../molecules/nav_list/NavList";
import styles from "./header.module.scss";

export default function Header() {
  // SPメニュー管理
  const [open, setOpen] = useState(false);
  const isSp = useMedia("(max-width: 639px)");

  // PCメニュー管理
  const [pcOpen, setPcOpen] = useState(false);
  const isPc = useMedia("(min-width: 640px)");
  // PCメニュー：480以下での表示
  // const [showPcHamburger, setShowPcHamburger] = useState(false);

  const spMenuRef = useRef<HTMLDivElement | null>(null);

  // 幅ブレイクに応じて片方を必ず閉じる
  useEffect(() => {
    if (isPc) {
      // PC幅に入ったらSPメニューを閉じる
      setOpen(false);
    }
    if (isSp) {
      // SP幅に入ったらPCメニューを閉じる
      setPcOpen(false);
    }
  }, [isPc, isSp]);

  // body スクロール固定（SPのみ）
  useEffect(() => {
    document.body.classList.toggle("is_lock", open);
    return () => document.body.classList.remove("is_lock");
  }, [open]);

  // ESCで閉じる
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return;
      if (open) setOpen(false);
      if (pcOpen) setPcOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, pcOpen]);

  // SPメニュー内のリンククリックで閉じる
  useEffect(() => {
    const el = spMenuRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      if (target?.closest("a")) {
        setOpen(false);
        setPcOpen(false);
      }
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="">
      {/* SP: ハンバーガーボタン */}
      {isSp && (
        <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />
      )}

      {/* SPメニュー */}
      <div
        ref={spMenuRef}
        className={`${styles.drawer__menu} ${open ? styles.is_checked : ""}`}
      >
        <div className="flex h-dvh flex-col items-center justify-center gap-10">
          <NavList
            classNameNav="flex flex-col gap-[5vh]"
            classNameLink="w-full flex items-center justify-center gap-7"
            classNameWrapper="w-36 flex gap-[30px] items-center"
            items={NAV}
          />

          {/* SNSリンク（簡略版） */}
          <div className="flex items-center justify-center gap-7">
            {SNS.map((s) => (
              <div key={s.label} className={styles.sns__icon_animation}>
                <a href={s.href} target="_blank" rel="nofollow noopener">
                  <Image
                    src={s.icon}
                    alt={`${s.label} icon`}
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TODO ヘッダー表示分スクロール後に表示 */}
      {isPc && (
        <HamburgerButton open={pcOpen} onClick={() => setPcOpen((v) => !v)} />
      )}
      {/* PCメニュー */}
      <div
        ref={spMenuRef}
        className={`${styles.drawer__menu_pc} ${pcOpen ? styles.is_checked : ""}`}
      >
        <div className={styles.drawer__menu_pc__contents}>
          <NavList
            classNameNav={styles.drawer__nav_pc}
            classNameLink={styles.drawer__nav__link_pc}
            classNameWrapper={styles.drawer__nav__link_wrapper_pc}
            items={NAV}
          />
        </div>
      </div>
    </header>
  );
}
