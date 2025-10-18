import { useFadeInObserver } from "@/app/hooks/useFadeInObserver";

type ModalContentProps = {
  contents: {
    date: string;
    title: string;
    description: string;
  }[];
};

const ModalContent = ({ contents }: ModalContentProps) => {
  useFadeInObserver();

  return (
    <div className="pc:gap-4 flex flex-col gap-3">
      {contents.map((item, index) => (
        <div
          key={index}
          className="pc:p-4 pc:mx-2 pc:pt-0 fade_in_up flex flex-col gap-2 border-b border-[#d7cdbe] p-2 pt-0"
        >
          {/* 時期＋タイトル */}
          <div className="pc:flex-row pc:items-center pc:gap-5 fade_in_up flex flex-col gap-2">
            {/* 時期 */}
            <div className="h-fit w-fit rounded-2xl bg-[#795549] px-4 py-1 text-xs text-[#f3f0eb]">
              {item.date}
            </div>
            {/* タイトル */}
            <div className="font-bold">{item.title}</div>
          </div>

          {/* 内容 */}
          <div>{item.description}</div>
        </div>
      ))}

      <div className="fade_in_up text-right font-[Oswald,serif] font-bold">
        To be continued...
      </div>
    </div>
  );
};

export default ModalContent;
