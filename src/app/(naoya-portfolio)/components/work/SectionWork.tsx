"use client";

import WorkSwiper from "@/app/(naoya-portfolio)/components/work/swiper/WorkSwiper";
import SectionCard from "@/app/components/molecules/section_card/SectionCard";

const SectionWork = () => {
  return (
    <div>
      <SectionCard
        title="Works -"
        subTitle="これまで作成した実績"
        contentClassName="!mt-0"
        id="work"
      >
        <></>
      </SectionCard>

      <div className="relative m-auto max-w-[900px]">
        <WorkSwiper />
      </div>
    </div>
  );
};

export default SectionWork;
