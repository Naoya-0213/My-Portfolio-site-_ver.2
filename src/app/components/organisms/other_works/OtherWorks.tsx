import WorkSwiper from "@/app/(naoya-portfolio)/components/work/swiper/WorkSwiper";

const OtherWorks = () => {
  return (
    <div>
      <div className="pc:px-10 m-auto flex max-w-[1160px] flex-col gap-1 px-5 max-[374px]:px-2">
        <h2 className="pc:text-3xl font-[Oswald,serif] text-2xl font-bold max-[374px]:text-xl">
          Other Works -
        </h2>
        <p className="common_font_size">その他、作成サイト実績</p>
      </div>
      <WorkSwiper />
    </div>
  );
};

export default OtherWorks;
