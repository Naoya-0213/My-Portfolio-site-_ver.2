import ItemCard from "@/app/components/molecules/section_card/itemcard/ItemCard";

import SectionCard from "../../../components/molecules/section_card/SectionCard";

const SectionSkill = () => {
  return (
    <div>
      <SectionCard title="Skill -" subTitle="今の私に出来る事">
        <div className="pc:flex-row pc:grid pc:grid-cols-3 flex flex-col gap-5 px-2 max-[374px]:gap-0">
          {/* TODO 12-16をコンポ化 */}
          <ItemCard title="Web制作" icon="/img/section_skill/code_icon.png">
            <p>
              React・Next.jsを用いたモダンなWebサイト制作に対応。デザインカンプを忠実に再現し、レスポンシブ対応や保守性を意識した分かりやすいコーディングを心がけています。
            </p>
          </ItemCard>

          <ItemCard title="アプリ開発" icon="/img/section_skill/app_icon.png">
            <p>
              React・Next.jsを用いたWebアプリ開発に対応。個人開発では、節約習慣化アプリを設計から実装まで一貫して制作。UI/UXを意識した実装や、Supabaseを利用したデータベース連携も行えます。
            </p>
          </ItemCard>

          <ItemCard
            title="改修 / 保守"
            icon="/img/section_skill/light_icon.png"
            className="border-b-0"
          >
            <p>
              既存のサイトやアプリの修正・機能追加・リファクタリングに対応します。柔軟かつ丁寧に改善を行い、小規模から大規模まで、保守性を意識した改修を実現します。
            </p>
          </ItemCard>
        </div>
      </SectionCard>
    </div>
  );
};

export default SectionSkill;
