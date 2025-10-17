import { portfolioContents } from "@/const/work/portfolioContents";

import SectionCard from "@/app/components/molecules/section_card/SectionCard";

import WorkSwiper from "../../components/work/swiper/WorkSwiper";
import WorkSectionCard from "../components/WorkSectionCard";

const page = () => {
  return (
    <div>
      <WorkSectionCard data={portfolioContents} />

      <SectionCard title="Other Works -" subTitle="その他、作成サイト実績">
        <WorkSwiper />
      </SectionCard>
    </div>
  );
};

export default page;
