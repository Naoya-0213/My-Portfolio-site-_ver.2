"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV, SNS__footer } from "@/const/nav";

import { useSnsToast } from "@/app/hooks/useSnsToast";

import SectionCard from "../../molecules/section_card/SectionCard";
import styles from "./footer.module.scss";

const Footer = () => {
  // 現在のpass確認
  const pathname = usePathname();
  const [hover, setHover] = useState(false);

  // トースト
  const { handleSnsClick } = useSnsToast();

  // 現在のpassに合わせてNAV要素クリック時の動作を指定
  const decorateHref = (href: string) => {
    if (!href.startsWith("#")) return href;

    return pathname === "/" ? href : `/${href}`;
  };

  // NavList に渡す配列を変換
  const navForCurrentPage = NAV.slice(0, -1).map((item) => ({
    ...item,
    href: decorateHref(item.href),
  }));

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#795549] pt-5">
      <SectionCard
        id="about"
        title="Contact -"
        subTitle="お問い合わせ"
        textColor="#f3f0eb"
        contentClassName="!mt-10"
      >
        <div className="fade_in_up flex items-center justify-center gap-5 px-5 max-[350px]:gap-2 sm:gap-20">
          {/* コメント＆メアド */}
          <div className="flex flex-col gap-5">
            <p className="max-w-80 text-[#f3f0eb]">
              HP制作・アプリ開発などのご依頼や、その他のお問い合わせは下記アドレスまでご連絡ください。
              XのDMでも受け付けております。
              <br />
              　＊LINE・Instagramは準備中です。
            </p>
            <Link
              href="mailto:naoya.work0213@gmail.com"
              prefetch={false}
              className={styles.footer__mail}
              aria-label="メールで問い合わせ"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Image
                src={
                  hover
                    ? "/img/icon/mail/email_icon-blow.png"
                    : "/img/icon/mail/email_icon-brown.png"
                }
                alt="メールアイコン"
                width={20}
                height={20}
              />
              <span>naoya.work0213@gmail.com</span>
            </Link>
          </div>

          {/* SNSリンク＆Top戻るボタン */}
          <div className="hidden flex-col items-center justify-center gap-5 sm:flex">
            {/* Top戻るボタン */}
            <button
              className="transition-transform duration-300 hover:scale-110"
              type="button"
              onClick={handleScrollTop}
              aria-label="ページトップへ戻る"
            >
              <Image
                src="/img/icon/balloon/icon-pagetop.png"
                alt="吹き出し"
                width={130}
                height={90}
              />
            </button>

            {/* SNSリンク */}
            <div className="sm:flex sm:gap-4">
              {SNS__footer.map((item, index) => (
                <div
                  key={index}
                  className="transition-transform duration-300 hover:scale-125"
                >
                  <a href={item.href} onClick={(e) => handleSnsClick(e, item)}>
                    <Image
                      src={item.icon}
                      alt="SNSアイコン"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* navメニュー */}
          <nav className="pc:flex hidden flex-col gap-1 sm:gap-2">
            {navForCurrentPage.map((item) => (
              <a key={item.href} href={item.href} className="min-w-15">
                <div>
                  <span
                    className={`${styles.footer__nav} font-[Oswald,serif] text-[#f3f0eb]`}
                  >
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </nav>
        </div>

        <div>
          <div className="mx-auto mt-10 w-full max-w-4xl border-t border-[#f3f0eb] py-3 sm:w-4/5">
            <div className="flex flex-col items-center justify-center gap-2 text-xs text-[#f3f0eb] sm:flex-row sm:gap-4">
              <span>Icons made by フリーピック from www.flaticon.com</span>
              <span>© 2024 Naoya’s Portfolio</span>
            </div>
          </div>
        </div>
      </SectionCard>
    </footer>
  );
};

export default Footer;
