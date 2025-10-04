import Image from "next/image";

import SectionCard from "@/app/components/molecules/SectionCard";

const SectionAbout = () => {
  return (
    <div>
      <SectionCard title="About Me -" subTitle="私について">
        <div className="m-auto flex max-w-3xl flex-col items-center justify-center gap-5 px-2 pt-8 sm:flex-row pc:gap-10">
          {/* 画像と名前 */}
          <div className="flex sm:w-1/3 flex-col items-center gap-5">
            <Image
              src="/img/section_aboutme/about-me__picture.png"
              alt="自己紹介写真"
              width={200}
              height={200}
              className="rounded-xl"
            />

            <div className="flex flex-col items-center gap-1">
              <h2 className="font-en text-xl font-bold">Naoya Noguchi</h2>
              <p>野口 直也</p>
            </div>
          </div>

          {/* 紹介文 */}
          <div className="sm:w-2/3 p-3">
            <p>
              1999年東京都生まれ。中央大学商学部を卒業後、新卒でFA機器を扱う専門商社に入社。4年間、ルート営業を担当し、顧客ニーズに寄り添った提案や業務効率化のサポートを通じて信頼を築き、売上成長に貢献。
              <br></br>
              <br></br>
              以前から関心のあったWeb業界へ挑戦すべく独学で学び始め、Web制作を経て、現在はアプリ開発に専念しています。UI/UXを意識した設計やモダンなフレームワークを活用し、実践的なスキルを磨いています。
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionAbout;
