import { sabolonContents } from "@/const/work/sabolonContents";

import { Header } from "@/app/components/organisms";
import OtherWorks from "@/app/components/organisms/other_works/OtherWorks";

import WorkSectionCard from "../components/WorkSectionCard";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <WorkSectionCard data={sabolonContents} />

      <OtherWorks />
    </div>
  );
};

export default PortfolioPage;
