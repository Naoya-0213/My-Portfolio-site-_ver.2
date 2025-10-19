"use client";

import { ohaContents } from "@/const/work/ohaContents";

import { Footer, Header } from "@/app/components/organisms";
import OtherWorks from "@/app/components/organisms/other_works/OtherWorks";
import { useFadeInObserver } from "@/app/hooks/useFadeInObserver";

import WorkSectionCard from "../components/WorkSectionCard";

const OhaPage = () => {
  useFadeInObserver();

  return (
    <div className="flex flex-col gap-5">
      <Header />
      <WorkSectionCard data={ohaContents} />

      <OtherWorks />
      <Footer />
    </div>
  );
};

export default OhaPage;
