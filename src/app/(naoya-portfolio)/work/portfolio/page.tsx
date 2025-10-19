import { portfolioContents } from "@/const/work/portfolioContents";

import { Footer, Header } from "@/app/components/organisms";
import OtherWorks from "@/app/components/organisms/other_works/OtherWorks";

import WorkSectionCard from "../components/WorkSectionCard";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <WorkSectionCard data={portfolioContents} />

      <OtherWorks />
       <Footer />
    </div>
  );
};

export default PortfolioPage;
