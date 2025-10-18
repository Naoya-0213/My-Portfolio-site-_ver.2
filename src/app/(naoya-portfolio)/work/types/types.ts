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
  scope?: { label: string; value: string }[];
  tech?: string[];
  tools?: { label: string; value: { item: string }[] }[];
  github?: { label: string; href: string }[];
  images?: { pc?: string; sp?: string };
  links?: { label: string; href: string }[];
};
