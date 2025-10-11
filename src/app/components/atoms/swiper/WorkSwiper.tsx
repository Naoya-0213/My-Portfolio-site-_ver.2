"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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
        <SwiperSlide className={styles.slide}>
          <div>1</div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div>2</div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div>3</div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div>4</div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div>5</div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div>6</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;

// // src/app/components/atoms/work_swiper/WorkSwiper.tsx
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";

// import WorkSwiperSlide from "../work_swiper_slide/WorkSwiperSlide";
// import styles from "./workSwiper.module.scss";

// /**
//  * 中央の1枚をフル表示し、左右は“チラ見せ”するスライダー。
//  * ポイント:
//  * - slidesPerView="auto" + CSSで .swiper-slide の固定幅を指定
//  * - centeredSlides で中央寄せ
//  * - 親に overflow:hidden を付けて左右を切り落とす
//  */
// export default function WorkSwiper() {
//   return (
//     <div className={styles.peekCarousel}>
//       <Swiper
//         //  modules={[Autoplay, Pagination, Navigation]}  // ① React特有：必要モジュールを明示
//         slidesPerView="auto"                           // ② 常に auto（幅はCSSで固定）
//         centeredSlides                                  // ③ 中央寄せ（Boundsは一旦オフ）
//         // centeredSlidesBounds                         // ← jQuery版は使っていないので一旦外す
//         spaceBetween={20}
//         loop
//         grabCursor
//         // jQuery版の autoplay 相当
//         autoplay={{
//           delay: 3000,
//           stopOnLastSlide: false,
//           disableOnInteraction: true,
//           reverseDirection: false,
//         }}
//         // ③ 余白をSwiperに伝える（親paddingの代わり）
//         slidesOffsetBefore={16}
//         slidesOffsetAfter={16}

//         // ④ 端で止まらない保険（可変幅ループの安定化）
//         loopPreventsSliding={false}
//         loopAdditionalSlides={4}

//         // （必要なら）境界幅での余白調整だけ breakpoint で
//         breakpoints={{
//           768: { spaceBetween: 24, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
//         }}

//         // オプション：矢印やドットを使う場合（クラス名はDOM側のものに合わせる）
//         pagination={{ el: ".work__swiper-pagination", clickable: true }}
//         navigation={{
//           prevEl: ".work__swiper-button-prev",
//           nextEl: ".work__swiper-button-next",
//         }}
//         observer
//         observeParents
//         initialSlide={0}
//       >
//         {/* sabolon */}
//         <SwiperSlide className={styles.slide}>
//           <WorkSwiperSlide
//             pc_img="/img/section_work/sabolon/sabolon-pc.png"
//             sp_img="/img/section_work/sabolon/sabolon.png"
//           />
//         </SwiperSlide>

//         {/* oha */}
//         <SwiperSlide className={styles.slide}>
//           <WorkSwiperSlide
//             pc_img="/img/section_work/oha/oha-pc.png"
//             sp_img="/img/section_work/oha/oha.png"
//           />
//         </SwiperSlide>

//         {/* onomichi */}
//         <SwiperSlide className={styles.slide}>
//           <WorkSwiperSlide
//             pc_img="/img/section_work/onomichi/onomichi-pc.png"
//             sp_img="/img/section_work/onomichi/onomichi.png"
//           />
//         </SwiperSlide>

//         {/* ポートフォリオサイト */}
//         <SwiperSlide className={styles.slide}>
//           <WorkSwiperSlide
//             pc_img="/img/section_work/naoya-portfolio/naoya-portfolio-pc.png"
//             sp_img="/img/section_work/naoya-portfolio/naoya-portfolio.png"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
