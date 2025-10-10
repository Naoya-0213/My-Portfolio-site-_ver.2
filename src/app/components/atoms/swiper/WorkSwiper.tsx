import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import WorkSwiperSlide from "../work_swiper_slide/WorkSwiperSlide";

export default function WorkSwiper() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* sabolon */}
      <SwiperSlide>
        <WorkSwiperSlide
          pc_img="/img/section_work/sabolon/sabolon-pc.png"
          sp_img="/img/section_work/sabolon/sabolon-sp.png"
        />
      </SwiperSlide>

      {/*  oha */}
      <SwiperSlide>
        <WorkSwiperSlide
          pc_img="/img/section_work/oha/oha-pc.png"
          sp_img="/img/section_work/oha/oha.png"
        />
      </SwiperSlide>

      {/* onomichi */}
      <SwiperSlide>
        <WorkSwiperSlide
          pc_img="/img/section_work/onomichi/onomichi-pc.png"
          sp_img="/img/section_work/onomichi/onomichi.png"
        />
      </SwiperSlide>

      {/* ポートフォリオサイト */}
      <SwiperSlide>
        <WorkSwiperSlide
          pc_img="/img/section_work/naoya-portfolio/naoya-portfolio-pc.png"
          sp_img="/img/section_work/naoya-portfolio/naoya-portfolio.png"
        />
      </SwiperSlide>
    </Swiper>
  );
}
