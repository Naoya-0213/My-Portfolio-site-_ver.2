"use client";

import { WorkSwiperSlideData } from "@/const/WorkSwiperSlideData";

import WorkSwiper from "@/app/components/atoms/swiper/WorkSwiper";
import WorkSwiperSlide from "@/app/components/atoms/work_swiper_slide/WorkSwiperSlide";
import SectionCard from "@/app/components/molecules/section_card/SectionCard";

const SectionWork = () => {
  // 仮置きデータ
  // const dummyPosts = Array.from({ length: 9 }).map((_, i) => ({
  //   id: i + 1,
  //   title: `Post Title ${i + 1}`,
  // }));

  const slides = WorkSwiperSlideData.map((slide) => (
    <WorkSwiperSlide
      key={slide.id}
      pc_img={slide.pc_img}
      sp_img={slide.sp_img}
    />
  ));

  return (
    <div>
      <SectionCard title="Works -" subTitle="これまで作成した実績">
        {/* ページネーション */}
        <div className="mt-10">
          <div className="m-auto max-w-4xl">
            <WorkSwiper />
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionWork;
