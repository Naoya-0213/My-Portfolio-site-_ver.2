type SectionCardProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

const SectionCard = ({ title, subTitle, children }: SectionCardProps) => {
  return (
    <div className="px-5">
      {/* タイトル */}
      <div className="flex flex-col">
        <h2 className="text-en font-[Oswald,serif] text-2xl font-bold">
          {title}
        </h2>
        <p className="text-sm">{subTitle}</p>
      </div>

      {/* コンテンツ */}

      {children}
    </div>
  );
};

export default SectionCard;
