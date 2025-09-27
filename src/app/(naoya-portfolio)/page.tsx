import {
  Footer,
  Header,
  SectionAbout,
  SectionFv,
  SectionLike,
  SectionSkill,
  SectionWork,
} from "../components/organisms";

const Home = () => {
  return (
    <div className="wrapper flex flex-col gap-5 bg-[#f3f0eb] text-base text-[#795549]">
      <Header />
      <main>
        <SectionFv />
        <SectionSkill />
        <SectionWork />
        <SectionAbout />
        <SectionLike />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
