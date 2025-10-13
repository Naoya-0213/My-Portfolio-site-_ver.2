import Image from "next/image";
import { useSwiper } from "swiper/react";

export const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <Image src="/img/section_work/icon/prev.png" alt="ボタン" width={30} height={30} />
    </button>
  );
};
