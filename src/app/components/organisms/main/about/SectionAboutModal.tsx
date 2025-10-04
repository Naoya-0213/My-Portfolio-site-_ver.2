import ButtonBrown from "@/app/components/atoms/ButtonBrown";

const SectionAboutModal = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
      <ButtonBrown text="これまでの学習内容"></ButtonBrown>
      <ButtonBrown text="これから学習したい事"></ButtonBrown>
    </div>
  );
};

export default SectionAboutModal;
