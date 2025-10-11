"use client";

import Link from "next/link";

import { WorkSlides } from "@/const/WorkSlides";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import WorkSwiperSlide from "../work_swiper_slide/WorkSwiperSlide";
import styles from "./workSwiper.module.scss";

function App() {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        observer
        observeParents
        centeredSlides={true}
        loopPreventsSliding={false}
        onInit={(sw) => sw.update()}
        onResize={(sw) => sw.update()}
        breakpoints={{
          0: {
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
          },

          340: {
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
        }}
      >
        {WorkSlides.map((s) => {
          return (
            <SwiperSlide className={styles.slide} key={s.id}>
              {s.href ? (
                <Link href={s.href}>
                  <WorkSwiperSlide pc_img={s.pc_img} sp_img={s.sp_img} />
                </Link>
              ) : (
                <WorkSwiperSlide pc_img={s.pc_img} sp_img={s.sp_img} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default App;
