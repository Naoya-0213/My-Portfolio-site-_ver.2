"use client";

import Image from "next/image";

import { GR3Contents } from "@/const/like/GR3Contents";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SlideNextButton } from "../../../../components/atoms/button/swiper_button/SlideNextButton";
import { SlidePrevButton } from "../../../../components/atoms/button/swiper_button/SlidePrevButton";
import styles from "./GR3Swiper.module.scss";

function GR3Swiper() {
  return (
    <div className="fade_in_up relative m-auto max-w-[1070px]">
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
        modules={[Keyboard, Autoplay]}
        pagination={{
          clickable: true, // クリック可能にする（任意）
          el: ".swiper-pagination",
          // Swiperが自動生成するpagination要素
          type: "bullets",
        }}
        keyboard={{
          enabled: true, // ← キーボード操作を有効化
          onlyInViewport: true, // ← スライダーが画面内にあるときのみ有効
        }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {GR3Contents.map((item) => {
          return (
            <SwiperSlide className={styles.slide} key={item.id}>
              <div className="h-74 w-48 rounded-xl border border-[#795549] bg-[#d7cdbe]">
                <div className="flex flex-col gap-3 p-5">
                  <Image
                    src={item.pic}
                    alt="GR3写真"
                    width={150}
                    height={150}
                  />
                  <span className="flex h-fit w-fit items-center rounded-xl bg-[#795549] px-4 py-1 text-xs text-[#f3f0eb]">
                    {item.date}
                  </span>
                  <div className="text-sm">{item.text}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="relative z-1000 hidden items-center justify-center gap-3 sm:flex">
          <div className="work-prev absolute -top-85 right-20">
            <SlidePrevButton />
          </div>
          <div className="work-next absolute -top-85 right-10">
            <SlideNextButton />
          </div>
        </div>

        <div className="swiper-pagination z-1000" />
      </Swiper>
    </div>
  );
}

export default GR3Swiper;
