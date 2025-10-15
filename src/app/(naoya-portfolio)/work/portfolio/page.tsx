import { portfolioContents } from "@/const/work/portfolioContents";

import WorkSectionCard from "../components/WorkSectionCard";

const page = () => {
  return (
    <div>
      <WorkSectionCard data={portfolioContents} />
    </div>
  );
};

export default page;
