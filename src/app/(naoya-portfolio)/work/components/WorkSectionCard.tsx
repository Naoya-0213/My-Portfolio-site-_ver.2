import SectionCard from "@/app/components/molecules/section_card/SectionCard";

import type { WorkContentsData } from "../types/types";

type WorkSectionCardProps = {
  data: WorkContentsData;
};

const WorkSectionCard = ({ data }: WorkSectionCardProps) => {
  const { title, badge, sections, scope, tech, links } = data;

  return (
    <div className="mt-5">
      <SectionCard title="Works -" subTitle="これまで作成した実績" id="work">
        <div>
          {/* イメージ画像 */}
          <div></div>

          {/* 詳細説明 */}
          <div>{/* タイトル */}</div>

          <article className="rounded-2xl border bg-[#F7F1EA] p-5 sm:p-8">
            <header className="mb-5 flex items-center gap-3">
              {badge && (
                <span className="rounded-full bg-[#D7CDBE] px-3 py-1 text-xs">
                  {badge}
                </span>
              )}
              <h3 className="text-lg font-bold">{title}</h3>
            </header>

            <dl className="space-y-6">
              {sections.map((s) => (
                <div key={s.label} className="grid grid-cols-[7rem_1fr] gap-4">
                  <dt className="font-semibold text-[#8B5E3C]">{s.label}</dt>
                  <dd className="leading-relaxed">{s.value}</dd>
                </div>
              ))}

              {scope?.length ? (
                <div className="grid grid-cols-[7rem_1fr] gap-4">
                  <dt className="font-semibold text-[#8B5E3C]">担当領域</dt>
                  <dd className="flex flex-wrap gap-2">
                    {scope.map((t) => (
                      <span
                        key={t}
                        className="rounded border px-2 py-1 text-sm"
                      >
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
        </div>
      </SectionCard>
    </div>
  );
};

export default WorkSectionCard;
