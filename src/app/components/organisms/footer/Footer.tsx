import { usePathname } from "next/navigation";

import { NAV } from "@/const/nav";

import SectionCard from "../../molecules/section_card/SectionCard";
import styles from "./footer.module.scss";

const Footer = () => {
  // 現在のpass確認
  const pathname = usePathname();

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

  return (
    <footer className="w-full bg-[#795549] pt-5">
      <SectionCard
        id="about"
        title="Contact -"
        subTitle="お問い合わせ"
        textColor="#f3f0eb"
        contentClassName="sm:!mt-0"
      >
        <div className="flex items-center justify-center gap-5 px-5 max-[350px]:gap-2 sm:gap-10">
          <div className="flex flex-col gap-5">
            <p className="max-w-80 text-[#f3f0eb]">
              HP制作・アプリ開発などのご依頼や、その他のお問い合わせは下記アドレスまでご連絡ください。
              XのDMでも受け付けております。
              <br />
              ＊LINE・Instagramは準備中です。
            </p>
            <div></div>
          </div>
          <div></div>

          {/* navメニュー */}
          <nav className="flex flex-col gap-1 sm:gap-2">
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
      </SectionCard>
    </footer>
  );
};

export default Footer;
