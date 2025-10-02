type SectionCardProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

const SectionCard = ({ title, subTitle, children }: SectionCardProps) => {
  return (
    <div className="pc:px-10 m-auto max-w-5xl px-5">
      {/* タイトル */}
      <div className="flex flex-col">
        <h2 className="text-en font-[Oswald,serif] text-2xl font-bold">
          {title}
        </h2>
        <p className="common_font_size">{subTitle}</p>
      </div>

      {/* コンテンツ */}
      <div className="common_font_size">{children}</div>
    </div>
  );
};

export default SectionCard;
