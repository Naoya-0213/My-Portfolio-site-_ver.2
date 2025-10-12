"use client";

import WorkSwiper from "@/app/components/atoms/swiper/WorkSwiper";
import SectionCard from "@/app/components/molecules/section_card/SectionCard";

const SectionWork = () => {
  return (
    <div>
      <SectionCard title="Works -" subTitle="これまで作成した実績">
        <></>
      </SectionCard>

      <div className="max-w-[900] m-auto">
        <WorkSwiper />
      </div>
    </div>
  );
};

export default SectionWork;
