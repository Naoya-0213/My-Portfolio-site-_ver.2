import SectionCard from "@/app/components/molecules/section_card/SectionCard";

const WorkSectionCard = () => {
  return (
    <div className="mt-5">
      <SectionCard title="Works -" subTitle="これまで作成した実績" id="work">
        <div>
          {/* イメージ画像 */}
          <div></div>

          {/* 詳細説明 */}
          <div>{/* タイトル */}</div>
        </div>
      </SectionCard>
    </div>
  );
};

export default WorkSectionCard;
