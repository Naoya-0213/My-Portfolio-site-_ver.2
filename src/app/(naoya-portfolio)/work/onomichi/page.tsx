import { onomichiContents } from "@/const/work/onomichiContents";

import { Footer, Header } from "@/app/components/organisms";
import OtherWorks from "@/app/components/organisms/other_works/OtherWorks";

import WorkSectionCard from "../components/WorkSectionCard";

const OnomichiPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <WorkSectionCard data={onomichiContents} />

      <OtherWorks />
       <Footer />
    </div>
  );
};

export default OnomichiPage;
