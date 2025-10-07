import Image from "next/image";

import SectionCard from "@/app/components/molecules/section_card/SectionCard";

const SectionLike = () => {
  return (
    <div>
      <SectionCard title="Like -" subTitle="好きな事・趣味">
        <div className="mt-5 px-2 max-[374px]:mt-1">
          <div className="m-auto flex max-w-screen-sm flex-col">
            {/* スノーボード */}
            <div className="relative flex flex-col gap-3 border-b border-[#d7cdbe] px-3 py-5 sm:flex-row">
              {/* タイトル */}
              <div className="flex gap-2 sm:min-w-40">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#795549]">
                  <p className="text-xs text-[#f3f0eb]">1</p>
                </div>
                <h2 className="font-bold">スノーボード</h2>
              </div>

              {/* 内容 */}
              <div>
                <p>
                  高校3年からスノーボードにハマっています。冬になれば、ほぼ毎週行くくらい好きです！これまで、29か所ものスキー場を訪問しました。今シーズンの目標は、北海道のニセコに滑りに行くこと！
                </p>
              </div>

              {/* デコレーション */}
              {/* TODO　調整 */}
              <div>
                <Image
                  src="/img/section_like/ski_icon.png"
                  alt="スキーアイコン"
                  width={30}
                  height={30}
                  className="absolute -top-10 right-24"
                />
                <Image
                  src="/img/section_like/snowboard_icon.png"
                  alt="スキーアイコン"
                  width={30}
                  height={30}
                  className="absolute -top-7 right-12"
                />
              </div>
            </div>

            {/* カメラ */}
            <div className="flex flex-col gap-3 px-3 py-5 sm:flex-row">
              {/* タイトル */}
              <div className="flex gap-2 sm:min-w-40">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#795549]">
                  <p className="text-xs text-[#f3f0eb]">2</p>
                </div>
                <h2 className="font-bold">カメラ</h2>
              </div>

              {/* 内容 */}
              <div>
                <p>
                  <span className="font-bold">
                    念願のGR3！カメラとともに旅へ。
                  </span>
                  <br></br>
                  特別な場所や日常のひとコマ、切り取るたびに広がる新しい世界。その中から、お気に入りの写真を少しだけご紹介します！
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionLike;
