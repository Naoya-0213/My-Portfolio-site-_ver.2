import { PaginatedItems } from "@/app/components/atoms/pagination/PaginatedItems";
import WorkSwiperSlide from "@/app/components/atoms/work_swiper_slide/WorkSwiperSlide";
import SectionCard from "@/app/components/molecules/section_card/SectionCard";

const SectionWork = () => {
  // 仮置きデータ
  const dummyPosts = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    title: `Post Title ${i + 1}`,
  }));

  const slides = [
    // sabolon
    <WorkSwiperSlide
      key={1}
      pc_img="/img/section_work/sabolon/sabolon-pc.png"
      sp_img="/img/section_work/sabolon/sabolon-sp.png"
    />,
    // oha
    <WorkSwiperSlide
      key={2}
      pc_img="/img/section_work/oha/oha-pc.png"
      sp_img="/img/section_work/oha/oha.png"
    />,
    // onomichi
    <WorkSwiperSlide
      key={3}
      pc_img="/img/section_work/onomichi/onomichi-pc.png"
      sp_img="/img/section_work/onomichi/onomichi.png"
    />,
    // ポートフォリオサイト
    <WorkSwiperSlide
      key={4}
      pc_img="/img/section_work/naoya-portfolio/naoya-portfolio-pc.png"
      sp_img="/img/section_work/naoya-portfolio/naoya-portfolio.png"
    />,
  ];

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

        <PaginatedItems items={slides} itemsPerPage={3} />
      </SectionCard>
    </div>
  );
};

export default SectionWork;
