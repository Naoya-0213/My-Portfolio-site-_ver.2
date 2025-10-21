import Image from "next/image";

import { qualifications } from "@/const/about/qualifications";
import { skill } from "@/const/about/skill";

import SectionCard from "@/app/components/molecules/section_card/SectionCard";

import SectionAboutModal from "./SectionAboutModal";

const SectionAbout = () => {
  return (
    <div>
      <SectionCard id="about" title="About Me -" subTitle="私について">
        <div className="flex flex-col gap-5">
          <div className="m-auto flex max-w-3xl flex-col items-center justify-center gap-5 px-2 sm:flex-row sm:gap-10">
            {/* 画像と名前 */}
            <div className="relative flex flex-col items-center sm:w-1/3">
              <Image
                src="/img/section_aboutme/about-me__picture.png"
                alt="自己紹介写真"
                width={200}
                height={200}
                className="fade_in_up rounded-xl"
              />

              <div className="fade_in_up mt-5 flex flex-col items-center gap-1">
                <h2 className="font-en text-xl font-bold">Naoya Noguchi</h2>
                <p>野口 直也</p>
              </div>

              {/* デコレーション */}
              <div>
                <Image
                  src="/img/section_aboutme/about-me__decoration.png"
                  alt="デコレーション"
                  width={100}
                  height={100}
                  className="pc:-right-[30px] absolute -top-[50px] -right-[50px] animate-[rotate_20s_linear_infinite]"
                ></Image>
              </div>
            </div>

            {/* 紹介文 */}
            <div className="fade_in_up flex flex-col gap-5 p-3 max-[350px]:p-1 sm:w-2/3">
              <p>
                1999年東京都生まれ。中央大学商学部を卒業後、新卒でFA機器を扱う専門商社に入社。4年間、ルート営業を担当し、顧客ニーズに寄り添った提案や業務効率化のサポートを通じて信頼を築き、売上成長に貢献。
                <br></br>
                <br></br>
                以前から関心のあったWeb業界へ挑戦するために独学を開始し、Web制作を経て現在はアプリ開発に注力。UI/UXを意識した設計やモダンなフレームワークを取り入れ、より実践的なスキルの習得に努めています。
              </p>

              <div className="flex w-full flex-col gap-5">
                {/* 取得資格 */}
                <div className="flex flex-col gap-2 font-bold sm:flex-row">
                  <p className="min-w-20">取得資格 :</p>

                  <div className="flex flex-wrap items-center gap-2 font-bold">
                    {qualifications.map((q, index) => (
                      <div
                        key={index}
                        className="rounded bg-[#EDE4D9] px-2 py-1 text-sm"
                      >
                        {q.title}
                      </div>
                    ))}
                  </div>
                </div>

                {/* スキル */}
                <div className="flex">
                  <div className="flex flex-col justify-center gap-2 font-bold sm:flex-row">
                    <p className="min-w-20">スキル :</p>
                    <div className="flex flex-wrap items-center gap-2 font-bold">
                      {skill.map((q, index) => (
                        <div
                          key={index}
                          className="rounded bg-[#EDE4D9] px-2 py-1 text-sm"
                        >
                          {q.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quita */}
                <div className="flex flex-col gap-2 sm:flex-row">
                  <h2 className="min-w-20 font-bold">Quita :</h2>
                  <a
                    href="https://qiita.com/Naoya__in_web"
                    className="font-bold"
                  >
                    https://qiita.com/Naoya__in_web
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* モーダルボタン */}
          <SectionAboutModal />
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionAbout;
