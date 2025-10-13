type SectionCardProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  contentClassName?: string;
};

const SectionCard = ({
  title,
  subTitle,
  children,
  contentClassName = "",
}: SectionCardProps) => {
  return (
    <div className="pc:px-10 m-auto max-w-[1160px] px-5 max-[374px]:px-2">
      {/* タイトル */}
      <div className="flex flex-col">
        <h2 className="font-[Oswald,serif] text-2xl font-bold max-[374px]:text-xl">
          {title}
        </h2>
        <p className="common_font_size">{subTitle}</p>
      </div>

      {/* コンテンツ */}
      <div className={`common_font_size mt-5 sm:mt-10 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionCard;
