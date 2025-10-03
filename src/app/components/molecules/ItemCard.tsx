import Image from "next/image";

type ItemCardProps = {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
};

const ItemCard = ({ title, icon, children, className }: ItemCardProps) => {
  return (
    <div
      className={`pc:border-b-0 flex flex-col gap-5 border-b border-[#d7cdbe] px-3 py-5 leading-relaxed max-[374px]:px-1 max-[374px]:py-3 ${className ?? ""}`}
    >
      <div className="flex gap-4">
        <Image src={icon} alt="アイテムカードアイコン" width={25} height={25} />
        <div className="text-base font-bold">{title}</div>
      </div>

      <div className="common_font_size">{children}</div>
    </div>
  );
};

export default ItemCard;
