"use client";

import Link from "next/link";

import { WorkSlides } from "@/const/WorkSlides";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import WorkSwiperSlide from "../work_swiper_slide/WorkSwiperSlide";
import { SlideNextButton } from "./swiper_button/SlideNextButton";
import { SlidePrevButton } from "./swiper_button/SlidePrevButton";
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
        modules={[Pagination]}
        pagination={{
          clickable: true, // クリック可能にする（任意）
          el: ".swiper-pagination", // Swiperが自動生成するpagination要素
          type: "bullets",
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

        {/* ボタン */}
        <div>
          <SlidePrevButton />
          <SlideNextButton />
        </div>

        {/* TODOページネーション実装 */}
        <div
          className={`${styles["swiper_pagination_bullet"]} ${styles["swiper_pagination_bullet_active"]}`}
        />
      </Swiper>
    </>
  );
}

export default App;
