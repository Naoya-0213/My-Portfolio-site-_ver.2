"use client";

import Image from "next/image";

import styles from "@/app/components/organisms/main/fv/fv.module.scss";

const SectionFv = () => {
  return (
    <section className="pc:pb-10 relative pb-7" id="fv">
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

            {/* pc）nav */}
            <div className={styles.fv__menu__nav_pc}>
              <nav className={styles.nav_pc}>
                {/* menu1：home */}
                <a href="#fv" className={styles.nav__link_pc}>
                  <div className={styles.nav__link_wrapper_pc}>
                    <Image
                      src="/img/icon/home/paper-plane_icon-brown.png"
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <span>Home -</span>
                  </div>
                </a>

                {/* menu2：skill */}
                <a href="#skill" className={styles.nav__link_pc}>
                  <div className={styles.nav__link_wrapper_pc}>
                    <Image
                      src="/img/icon/skill/skill_icon-brown.png"
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <span>Skill -</span>
                  </div>
                </a>

                {/* menu3：work */}
                <a href="#work" className={styles.nav__link_pc}>
                  <div className={styles.nav__link_wrapper_pc}>
                    <Image
                      src="/img/icon/work/pc_icon-brown.png"
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <span>Work -</span>
                  </div>
                </a>

                {/* menu4：About me */}
                <a href="#about-me" className={styles.nav__link_pc}>
                  <div className={styles.nav__link_wrapper_pc}>
                    <Image
                      src="/img/icon/about-me/user_icon-brown.png"
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <span>About me -</span>
                  </div>
                </a>

                {/* menu5：contact */}
                <a href="#contact" className={styles.nav__link_pc}>
                  <div className={styles.nav__link_wrapper_pc}>
                    <Image
                      src="/img/icon/mail/email_icon-brown.png"
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <span>Contact -</span>
                  </div>
                </a>

                {/* snsリンク */}
                <div className={styles.sns__link_pc}>
                  <div className={styles.sns__link_pc_item}>
                    <a href="#" target="_blank" rel="nofollow noopener">
                      <Image
                        src="/img/icon/line/line_icon-brown.png"
                        alt="sns-icon"
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>

                  <div className={styles.sns__link_pc_item}>
                    <a
                      href="https://x.com/Naoya__in_web"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <Image
                        src="/img/icon/x/x_icon-brown.png"
                        alt="sns-icon"
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>

                  <div className={styles.sns__link_pc_item}>
                    <a href="#" target="_blank" rel="nofollow noopener">
                      <Image
                        src="/img/icon/instagram/instagram_icon-brown.png"
                        alt="sns-icon"
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFv;
