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
    // TODO body-wrapperでpadding指定？
    <div className="body-wrapper">
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
