import { portfolioContents } from "@/const/work/portfolioContents";

import OtherWorks from "@/app/components/organisms/other_works/OtherWorks";

import WorkSectionCard from "../components/WorkSectionCard";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <WorkSectionCard data={portfolioContents} />

      <OtherWorks />
    </div>
  );
};

export default PortfolioPage;
