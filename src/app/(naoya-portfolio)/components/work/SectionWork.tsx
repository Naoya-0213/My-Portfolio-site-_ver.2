"use client";

import Image from "next/image";

import WorkSwiper from "@/app/(naoya-portfolio)/components/work/swiper/WorkSwiper";
import SectionCard from "@/app/components/molecules/section_card/SectionCard";

import styles from "./work.module.scss";

const SectionWork = () => {
  return (
    <div className="relative">
      <SectionCard
        title="Works -"
        subTitle="これまで作成した実績"
        contentClassName="!mt-0"
      >
        <></>
      </SectionCard>

      <div className="relative m-auto max-w-[900px]">
        <WorkSwiper />

        {/* デコレーション */}
        <div className={styles.decoration}>
          <Image
            src="/img/section_work/icon/icon-click.png"
            alt="デコレーション"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWork;
