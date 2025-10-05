"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { NAV, SNS } from "@/app/constants/nav";
import { useMedia } from "@/app/hooks/useMedia";

import HamburgerButton from "../../atoms/hamburger_buttton/HamburgerButton";
import NavList from "../../molecules/NavList";
import styles from "./header.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const isPc = useMedia("(min-width: 640px)");
  const spMenuRef = useRef<HTMLDivElement | null>(null);

  // PC幅に移行したらSPメニューは必ず閉じる
  useEffect(() => {
    if (isPc) setOpen(false);
  }, [isPc]);

  // body スクロール固定
  useEffect(() => {
    document.body.classList.toggle("is_lock", open);
    return () => document.body.classList.remove("is_lock");
  }, [open]);

  // ESCで閉じる
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // SPメニュー内のリンククリックで閉じる
  useEffect(() => {
    const el = spMenuRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a")) setOpen(false);
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="">
      {/* TODO　PC版どうする？ */}
      {/* SP: ハンバーガーボタン */}
      <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />

      {/* SPメニュー（上から降りる） */}
      <div
        // id="js-drawer__menu"
        ref={spMenuRef}
        className={`${styles.drawer__menu} ${open ? styles.is_checked : ""}`}
        // hidden={!open} // FOUC防止
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

      {/* PCメニュー（常時表示） */}
      <div id="js-drawer__menu-pc" className={styles.drawer__menu_pc}>
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
