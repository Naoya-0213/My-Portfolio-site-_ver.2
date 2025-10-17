import { ohaContents } from "@/const/work/ohaContents";

import OtherWorks from "@/app/components/organisms/other_works/OtherWorks";

import WorkSectionCard from "../components/WorkSectionCard";

const ohaPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <WorkSectionCard data={ohaContents} />

      <OtherWorks />
    </div>
  );
};

export default ohaPage;
