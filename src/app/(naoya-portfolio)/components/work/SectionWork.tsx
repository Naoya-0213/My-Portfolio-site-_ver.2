"use client";

import WorkSwiper from "@/app/components/atoms/swiper/WorkSwiper";
import SectionCard from "@/app/components/molecules/section_card/SectionCard";

const SectionWork = () => {
  return (
    <div>
      <SectionCard
        title="Works -"
        subTitle="これまで作成した実績"
        contentClassName="!mt-0"
      >
        <></>
      </SectionCard>

      <div className="m-auto max-w-[900px]">
        <WorkSwiper />
      </div>
    </div>
  );
};

export default SectionWork;
