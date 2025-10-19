"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { NAV, SNS } from "@/const/nav";

import { useMedia } from "@/app/hooks/useMedia";

import HamburgerButton from "../../atoms/hamburger_buttton/HamburgerButton";
import NavList from "../../molecules/nav_list/NavList";
import styles from "./header.module.scss";

export default function Header() {
  // SPメニュー管理
  const [open, setOpen] = useState(false);
  const isSp = useMedia("(max-width: 639px)");
  const spMenuRef = useRef<HTMLDivElement | null>(null);

  // PCメニュー管理
  const [pcOpen, setPcOpen] = useState(false);
  const isPc = useMedia("(min-width: 640px)");
  const pcMenuRef = useRef<HTMLDivElement | null>(null);

  // 現在のpass確認
  const pathname = usePathname();

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
      if (e.key !== "Escape") return;
      if (open) setOpen(false);
      if (pcOpen) setPcOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, pcOpen]);

  // メニュー表示中：クリック時の閉じる指定
  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest("a")) {
      setOpen(false);
      setPcOpen(false);
    }
  };

  // 現在のpassに合わせてNAV要素クリック時の動作を指定
  const decorateHref = (href: string) => {
    if (!href.startsWith("#")) return href;

    return pathname === "/" ? href : `/${href}`;
  };

  // NavList に渡す配列を変換
  const navForCurrentPage = NAV.map((item) => ({
    ...item,
    href: decorateHref(item.href),
  }));

  return (
    <header>
      {/* SP: ハンバーガーボタン */}
      {isSp && (
        <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />
      )}

      {/* SPメニュー */}
      <div
        ref={spMenuRef}
        className={`${styles.drawer__menu} ${open ? styles.is_checked : ""}`}
        onClick={handleMenuClick}
      >
        <div className="flex h-dvh flex-col items-center justify-center gap-10">
          <NavList
            classNameNav="flex flex-col gap-[5vh]"
            classNameLink="w-full flex items-center justify-center gap-7"
            classNameWrapper="w-36 flex gap-[30px] items-center"
            items={navForCurrentPage}
          />

          {/* SNSリンク */}
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

      {isPc && (
        <HamburgerButton open={pcOpen} onClick={() => setPcOpen((v) => !v)} />
      )}
      {/* PCメニュー */}
      <div
        ref={pcMenuRef}
        className={`${styles.drawer__menu_pc} ${pcOpen ? styles.is_checked : ""}`}
        onClick={handleMenuClick}
      >
        <div className={styles.drawer__menu_pc__contents}>
          <NavList
            classNameNav={styles.drawer__nav_pc}
            classNameLink={styles.drawer__nav__link_pc}
            classNameWrapper={styles.drawer__nav__link_wrapper_pc}
            items={navForCurrentPage}
          />
        </div>
      </div>
    </header>
  );
}
