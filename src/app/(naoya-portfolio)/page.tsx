import { Header, SectionFv, SectionSkill } from "../components/organisms";

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-[#f3f0eb] text-base text-[#795549]">
      <Header />
      <main>
        <SectionFv />
        <SectionSkill />
        {/* <SectionWork />
        <SectionAbout />
        <SectionLike /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
