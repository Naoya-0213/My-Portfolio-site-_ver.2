import Image from "next/image";

import { useSwiper } from "swiper/react";

export const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <Image
        src="/img/section_work/icon/next.png"
        alt="ボタン"
        width={30}
        height={30}
      />
    </button>
  );
};
