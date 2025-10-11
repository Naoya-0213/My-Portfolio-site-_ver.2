

"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "../../../../../node_modules/swiper/swiper.css";

const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

function App() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop
      >
        {data.map((d, index) => (
          <SwiperSlide key={index}>
            <div style={{ background: "grey", height: "300px" }}>{d}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default App;
