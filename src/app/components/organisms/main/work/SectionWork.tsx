import WorkSwiperSlide from "@/app/components/atoms/work_swiper_slide/WorkSwiperSlide";
import SectionCard from "@/app/components/molecules/section_card/SectionCard";

const SectionWork = () => {
  return (
    <div>
      <SectionCard title="Works -" subTitle="これまで作成した実績">
        {/* ページネーション */}
        <div className="mt-5">
          <div>
            <WorkSwiperSlide
              pc_img="/img/section_work/naoya-portfolio/naoya-portfolio-pc.png"
              sp_img="/img/section_work/naoya-portfolio/naoya-portfolio.png"
            />
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionWork;
