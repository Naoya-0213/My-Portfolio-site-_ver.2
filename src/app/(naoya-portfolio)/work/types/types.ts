import { ReactNode } from "react";

export type WorkField = {
  label: string;
  value: ReactNode;
};

export type WorkContentsData = {
  id: string;
  title: string;
  badge?: string;
  sections: WorkField[];
  scope?: string[];
  tech?: string[];
  links?: { label: string; href: string }[];
  images?: { pc?: string; sp?: string };
};
