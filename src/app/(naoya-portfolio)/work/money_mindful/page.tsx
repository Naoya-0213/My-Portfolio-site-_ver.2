"use client";

import { money_mindfulContents } from "@/const/work/money_mindfulContents";

import { Footer, Header } from "@/app/components/organisms";
import OtherWorks from "@/app/components/organisms/other_works/OtherWorks";
import { useFadeInObserver } from "@/app/hooks/useFadeInObserver";

import WorkSectionCard from "../components/WorkSectionCard";

const MoneymindfulPage = () => {
  useFadeInObserver();

  return (
    <div className="flex flex-col gap-5">
      <Header />
      <WorkSectionCard data={money_mindfulContents} />

      <OtherWorks />
      <Footer />
    </div>
  );
};

export default MoneymindfulPage;
