import { ReactNode } from "react";

export type WorkContentsData = {
  id: string;
  title: string;
  badge?: string;
  img: { sp: string; pc: string };
  sections: { label: string; value: ReactNode }[];
  scope?: { label: string; value: string }[];
  tech?: string[];
  tools?: { label: string; value: { item: string }[] }[];
  github?: { label: string; href: string }[];
  images?: { pc?: string; sp?: string };
  links?: { label: string; href: string }[];
  refactoring?: { label: string; value: string }[];
  mainFunction?: { label: string; value: string }[];
  account?: { label: string; value: string }[];
};
