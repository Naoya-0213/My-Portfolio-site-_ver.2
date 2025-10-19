import { sabolonContents } from "@/const/work/sabolonContents";

import { Footer, Header } from "@/app/components/organisms";
import OtherWorks from "@/app/components/organisms/other_works/OtherWorks";

import WorkSectionCard from "../components/WorkSectionCard";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <WorkSectionCard data={sabolonContents} />

      <OtherWorks />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
