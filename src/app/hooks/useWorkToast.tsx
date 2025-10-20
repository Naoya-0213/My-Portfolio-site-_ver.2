"use client";

import toast from "react-hot-toast";

import type { workSlides } from "@/const/work/workSlides";

export const useWorkToast = () => {
  const handleWorkSlideClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    workSlide: (typeof workSlides)[number],
  ) => {
    // LINE / Instagram は準備中としてエラー表示
    if (workSlide.id === "coming_soon") {
      e.preventDefault();
      toast.error("coming soon...!!");
    }
  };

  return { handleWorkSlideClick };
};
