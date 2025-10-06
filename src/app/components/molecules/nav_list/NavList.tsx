import Image from "next/image";

type Props = {
  classNameNav: string; // "drawer__nav" or "drawer__nav-pc"
  classNameLink: string; // "drawer__nav__link" or "drawer__nav__link-pc"
  classNameWrapper: string; // "drawer__nav__link-wrapper" or "...-pc"
  items: { href: string; label: string; icon: string }[];
};
export default function NavList({
  classNameNav,
  classNameLink,
  classNameWrapper,
  items,
}: Props) {
  return (
    <nav className={classNameNav}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className={classNameLink}>
          <div className={classNameWrapper}>
            {/* 必要なら next/image → レイアウト崩れないよう width/height 指定 */}
            <Image src={item.icon} alt="icon" width={25} height={25} />
            <span>{item.label}</span>
          </div>
        </a>
      ))}
    </nav>
  );
}
