"use client";

import { useEffect } from "react";

export const useFadeInObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("js_in_view");
        }
      });
    });

    const elements = document.querySelectorAll(
      ".fade_in_up, .fade_in_down, .fade_in",
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
