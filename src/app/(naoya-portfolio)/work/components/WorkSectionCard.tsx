"use client";

import Image from "next/image";

import SectionCard from "@/app/components/molecules/section_card/SectionCard";
import { useFadeInObserver } from "@/app/hooks/useFadeInObserver";

import type { WorkContentsData } from "../../../../const/work/types/types";
import styles from "../components/workSection.module.scss";

type WorkSectionCardProps = {
  data: WorkContentsData;
};

const WorkSectionCard = ({ data }: WorkSectionCardProps) => {
  const {
    title,
    badge,
    sections,
    scope,
    tech,
    github,
    links,
    tools,
    img,
    refactoring,
    mainFunction,
    account,
  } = data;

  useFadeInObserver();

  return (
    <div className="mt-5 px-2">
      <SectionCard title="Works -" subTitle="これまで作成した実績" id="work">
        {/* サイトイメージ */}
        <div
          className={`${styles.work__details__image} sm:mt-o mt-10 mb-10 sm:mb-3`}
        >
          {/* <!-- SP表示用 --> */}
          <div className={`${styles.work__details__image_sp} fade_in_up`}>
            <div className={`${styles.image_sp_frame}`}>
              <div className={`${styles.image_sp_design}`}>
                <Image
                  src={img.sp}
                  alt="サイトイメージ"
                  width={1080}
                  height={2400}
                  className="block h-auto w-full"
                />
              </div>
            </div>

            {/* スクロールダウンデコレーション */}
            <p className={`${styles.work__scroll_text}`}>scroll</p>
            <div className={`${styles.work__scroll_arrow}`}></div>
          </div>
          {/* PC表示用 */}
          <div className={`${styles.work__details__image_pc} fade_in_up`}>
            <div className={`${styles.image_pc_frame}`}>
              <div className={`${styles.image_pc_design}`}>
                <Image
                  src={img.pc}
                  alt="サイトイメージ"
                  width={1920}
                  height={1200}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <article className="pb-8 sm:p-8">
          {/* タイトル */}
          <header className="fade_in_up pc:mb-10 m-auto mb-5 flex max-w-2xl flex-col gap-5 max-[350px]:items-start max-[350px]:gap-2 sm:flex-row sm:items-center">
            {badge && (
              <span className="h-fit w-fit min-w-20 rounded-2xl bg-[#795549] px-4 py-1 text-xs text-[#f3f0eb]">
                {badge}
              </span>
            )}
            <h3 className="text-lg font-bold max-[350px]:ml-3 max-[350px]:text-base">
              {title}
            </h3>
          </header>

          {/* 詳細 */}
          <dl className="m-auto max-w-2xl space-y-7">
            {sections.map((s) => (
              <div
                key={s.label}
                className={`${styles.work_contents} fade_in_up px-2 pb-7`}
              >
                <dt className={`${styles.contents_label} `}>{s.label}</dt>
                <dd className="leading-relaxed whitespace-pre-line">
                  {s.value}
                </dd>
              </div>
            ))}

            {/* 主な機能 */}
            {mainFunction?.length ? (
              <div className={`${styles.work_contents} fade_in_up px-2 pb-7`}>
                <dt className={`${styles.contents_label} `}>主な機能</dt>
                <dd className="flex flex-col gap-3">
                  {mainFunction.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col leading-relaxed`}
                    >
                      <div className="min-w-30 font-semibold sm:min-w-40">
                        {item.label}
                      </div>
                      <div>{item.value}</div>
                    </div>
                  ))}
                </dd>
              </div>
            ) : null}

            {/* 今後の更新内容（リファクタリング内容） */}
            {refactoring?.length ? (
              <div className={`${styles.work_contents} fade_in_up px-2 pb-7`}>
                <dt className={`${styles.contents_label} `}>今後の更新</dt>
                <dd className="flex flex-col gap-3">
                  {refactoring.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col leading-relaxed`}
                    >
                      <div className="min-w-30 font-semibold sm:min-w-40">
                        {item.label}
                      </div>
                      <div>{item.value}</div>
                    </div>
                  ))}
                </dd>
              </div>
            ) : null}

            {/* 担当領域 */}
            {scope?.length ? (
              <div className={`${styles.work_contents} fade_in_up px-2 pb-7`}>
                <dt className={`${styles.contents_label} `}>
                  担当領域 / <br className="hidden sm:block" />
                  制作期間
                </dt>
                <dd className="flex-col gap-2 max-[350px]:flex">
                  {scope.map((item, index) => (
                    <div
                      key={index}
                      className={`flex leading-relaxed max-[350px]:flex-col ${index === scope.length - 1 ? "mt-3" : ""}`}
                    >
                      <div className="min-w-40">{item.label}</div>
                      <div>{item.value}</div>
                    </div>
                  ))}
                </dd>
              </div>
            ) : null}

            {/* 使用技術 */}
            {tech?.length ? (
              <div className={`${styles.work_contents} fade_in_up px-2 pb-7`}>
                <dt className={`${styles.contents_label} `}>使用技術</dt>
                <dd className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-[#795549] px-2 py-1 text-sm text-[#EDE4D9]"
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}

            {/* 使用ツール */}
            {tools?.length ? (
              <div className={`${styles.work_contents} fade_in_up px-2 pb-7`}>
                <dt className={`${styles.contents_label} `}>使用ツール</dt>
                <dd className="flex flex-col gap-2">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex leading-relaxed max-[350px]:flex-col"
                    >
                      <div className="min-w-30 sm:min-w-30">{tool.label}</div>
                      <div className="flex flex-wrap gap-2">
                        {tool.value.map((v, index) => (
                          <span
                            key={index}
                            className="rounded bg-[#EDE4D9] px-2 py-1 text-sm"
                          >
                            {v.item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </dd>
              </div>
            ) : null}

            {/* GitHub */}
            {github?.length ? (
              <div className={`${styles.work_contents} fade_in_up px-2 pb-7`}>
                <dt className={`${styles.contents_label}`}>GitHub</dt>
                <dd className="flex flex-wrap gap-3">
                  {github.map((l) => (
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

            {/* サイトURL */}
            {links?.length ? (
              <div className={`${styles.work_contents} fade_in_up px-2 pb-7`}>
                <dt className={`${styles.contents_label}`}>リンク</dt>
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

            {/* デモアカウントID */}
            {account?.length ? (
              <div className={`${styles.work_contents} fade_in_up px-2 pb-7`}>
                <dt className={`${styles.contents_label} `}>デモアカウント</dt>
                <dd className="flex gap-10 max-[350px]:flex-col max-[350px]:gap-0">
                  {account.map((item, index) => (
                    <div key={index} className={`flex gap-2 leading-relaxed`}>
                      <div className="font-semibold">{item.label}：</div>
                      <div>{item.value}</div>
                    </div>
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
