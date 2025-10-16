import SectionCard from "@/app/components/molecules/section_card/SectionCard";

import type { WorkContentsData } from "../types/types";

type WorkSectionCardProps = {
  data: WorkContentsData;
};

const WorkSectionCard = ({ data }: WorkSectionCardProps) => {
  const { title, badge, sections, scope, tech, links } = data;

  return (
    <div className="mt-5 px-2">
      <SectionCard title="Works -" subTitle="これまで作成した実績" id="work">
        <article className="sm:p-8">
          {/* イメージ画像 */}
          <div></div>

          {/* タイトル */}
          <header className="pc:mb-10 m-auto mb-5 flex max-w-2xl items-center gap-5 max-[350px]:flex-col max-[350px]:items-start max-[350px]:gap-2">
            {badge && (
              <span className="h-fit w-fit rounded-2xl bg-[#795549] px-4 py-1 text-xs text-[#f3f0eb]">
                {badge}
              </span>
            )}
            <h3 className="text-lg font-bold max-[350px]:ml-3 max-[350px]:text-base">
              {title}
            </h3>
          </header>

          {/* 詳細 */}

          <dl className="m-auto max-w-2xl space-y-6">
            {sections.map((s) => (
              <div
                key={s.label}
                className="pc:flex-row flex flex-col gap-2 border-b border-[#d7cdbe] px-2 pb-5"
              >
                <dt className="pc:min-w-32 font-semibold text-[#8B5E3C]">
                  {s.label}
                </dt>
                <dd className="leading-relaxed">{s.value}</dd>
              </div>
            ))}

            {scope?.length ? (
              <div className="grid grid-cols-[7rem_1fr] gap-4">
                <dt className="font-semibold text-[#8B5E3C]">担当領域</dt>
                <dd className="flex flex-wrap gap-2">
                  {scope.map((t) => (
                    <span key={t} className="rounded border px-2 py-1 text-sm">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}

            {tech?.length ? (
              <div className="grid grid-cols-[7rem_1fr] gap-4">
                <dt className="font-semibold text-[#8B5E3C]">技術</dt>
                <dd className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-[#EDE4D9] px-2 py-1 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}

            {links?.length ? (
              <div className="grid grid-cols-[7rem_1fr] gap-4">
                <dt className="font-semibold text-[#8B5E3C]">リンク</dt>
                <dd className="flex flex-wrap gap-3">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </article>
      </SectionCard>
    </div>
  );
};

export default WorkSectionCard;
