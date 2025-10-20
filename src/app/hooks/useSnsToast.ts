"use client";

import toast from "react-hot-toast";

import { SNS, type SNS__footer } from "@/const/nav";

export const useSnsToast = () => {
  const handleSnsClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof SNS | typeof SNS__footer)[number],
  ) => {
    // LINE / Instagram は準備中としてエラー表示
    if (item.label === "LINE" || item.label === "Instagram") {
      e.preventDefault();
      toast.error(
        `${item.label}は準備中です。メールアドレス、またはXのDMからご連絡ください。`,
        {},
      );
    }
  };

  return { handleSnsClick };
};
