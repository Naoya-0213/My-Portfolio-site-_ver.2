import {
  Header,
  SectionAbout,
  SectionFv,
  SectionLike,
  SectionSkill,
  SectionWork,
} from "../components/organisms";

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-[#f3f0eb] text-base text-[#795549]">
      <Header />
      <main className="flex flex-col gap-5 sm:gap-10">
        <SectionFv />
        <SectionSkill />
        <SectionWork />
        <SectionAbout />
        <SectionLike />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
