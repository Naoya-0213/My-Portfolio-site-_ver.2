"use client";

import Image from "next/image";

import { NAV, SNS } from "@/const/nav";

import { useSnsToast } from "@/app/hooks/useSnsToast";

import styles from "./fv.module.scss";

const SectionFv = () => {
  const { handleSnsClick } = useSnsToast();

  return (
    <section className="pc:pb-10 relative" id="fv">
      <div className="mx-auto max-w-[1160px]">
        <div className="relative z-[1] sm:flex sm:h-auto sm:flex-row-reverse">
          {/* fv画像（背景でSP/PC切替） */}
          <div className={styles.fv__img}>
            {/* デコレーション */}
            <div className={styles.fv_decoration} />
          </div>

          {/* sp）logo */}
          <Image
            src="/img/logo/logo-white.png"
            alt="ロゴ画像"
            width={200}
            height={120}
            className={styles.fv__logo_sp}
          />

          {/* pc）menu */}
          <div className="hidden sm:flex sm:flex-[3] sm:flex-col sm:items-center sm:justify-center">
            {/* pc）logo */}
            <div className={styles.fv__logo_pc}>
              <Image
                src="/img/logo/logo-brown.png"
                alt="ロゴ画像"
                width={200}
                height={120}
              />
            </div>

            {/* PC）nav */}
            <div className={`${styles.fv__menu__nav_pc}`}>
              <nav className={styles.nav_pc}>
                {NAV.map((item, index) => (
                  <div key={index}>
                    <a href={item.href} className={styles.nav__link_pc}>
                      <div className={styles.nav__link_wrapper_pc}>
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={25}
                          height={25}
                        />
                        <span>{item.label}</span>
                      </div>
                    </a>
                  </div>
                ))}
              </nav>

              {/* snsリンク */}
              <div className={styles.sns__link_pc}>
                {SNS.map((item, index) => (
                  <div className={styles.sns__link_pc_item} key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="nofollow noopener"
                      onClick={(e) => handleSnsClick(e, item)}
                    >
                      <Image
                        src={item.icon}
                        alt="sns-icon"
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFv;
