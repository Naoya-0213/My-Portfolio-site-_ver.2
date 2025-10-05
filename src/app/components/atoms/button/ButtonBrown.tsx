type ButtonBrownProps = {
  text: string;
  onClick?: () => void;
};

const ButtonBrown = ({ text, onClick }: ButtonBrownProps) => {
  return (
    <div
      className="pc:h-10 flex h-[35px] w-fit cursor-pointer items-center rounded-full border border-[#795549] bg-[#795549] px-5 py-[3px] text-sm font-bold text-[#f3f0eb] transition-colors duration-500 hover:bg-[#d7cdbe] hover:text-[#795549]"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default ButtonBrown;
