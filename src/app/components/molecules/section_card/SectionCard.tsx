type SectionCardProps = {
  id?: string;
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
  id,
}: SectionCardProps) => {
  return (
    <section
      className="pc:px-10 m-auto max-w-[1160px] px-5 max-[374px]:px-2"
      id={id}
    >
      {/* タイトル */}
      <div className="flex flex-col gap-1">
        <h2 className="pc:text-3xl font-[Oswald,serif] text-2xl font-bold max-[374px]:text-xl">
          {title}
        </h2>
        <p className="common_font_size">{subTitle}</p>
      </div>

      {/* コンテンツ */}
      <div className={`common_font_size mt-5 sm:mt-10 ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionCard;
