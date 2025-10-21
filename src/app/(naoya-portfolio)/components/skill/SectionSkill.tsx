import { skillAccordion } from "@/const/skill/skillAccordion";
import { skillCard } from "@/const/skill/skillcard";

import AccordionButton from "@/app/components/atoms/button/accordion_button/AccordionButton";
import ItemCard from "@/app/components/molecules/section_card/itemcard/ItemCard";

import SectionCard from "../../../components/molecules/section_card/SectionCard";

const SectionSkill = () => {
  return (
    <div>
      <SectionCard title="Skill -" subTitle="今の私に出来る事" id="skill">
        {/* スキル */}
        <div className="pc:flex-row pc:grid pc:grid-cols-3 flex flex-col gap-5 px-2 max-[374px]:gap-0">
          {skillCard.map((item, index) => (
            <div key={index}>
              <ItemCard
                title={item.title}
                icon={item.icon}
                className={`fade_in_up ${index === skillCard.length - 1 ? "border-b-0" : ""}`}
              >
                <p>{item.text}</p>
              </ItemCard>
            </div>
          ))}
        </div>

        {/* アコーディオン */}
        <div className="m-auto my-5 w-full">
          <AccordionButton
            title="スキルを詳しく見る"
            titleColor="text-[#96b3d1] hover:text-[#795549]"
            durationSec={1}
          >
            <div className="m-auto max-w-screen-sm px-5 pt-8">
              <div className="flex flex-col gap-5">
                {skillAccordion.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border-b border-[#d7cdbe] pb-5 sm:flex-row"
                  >
                    <div className="min-w-30 font-bold text-[#96b3d1]">
                      {item.label}
                    </div>
                    <p>{item.value}</p>
                  </div>
                ))}

                <div className="text-right font-[Oswald,serif] font-bold text-[#795549]">
                  To be continued...
                </div>
              </div>
            </div>
          </AccordionButton>
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionSkill;
