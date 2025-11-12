export interface SearchQueryType {
  query: string;
  page: string;
  types: string[];
}

import articles from "../assets/searchFilters/articles.svg";
import chapters from "../assets/searchFilters/chapters.svg";
import lessons from "../assets/searchFilters/lessons.svg";
import people from "../assets/searchFilters/people.svg";

export const pageTypes = [
  {
    label: "Articles",
    value: "article",
    color: "var(--color-category-a)",
    Graphic: articles,
  },
  {
    label: "Chapter",
    value: "chapter",
    color: "var(--color-category-b)",
    Graphic: chapters,
  },
  {
    label: "Lesson",
    value: "lesson",
    color: "var(--color-category-c)",
    Graphic: lessons,
  },
  {
    label: "Person",
    value: "person",
    color: "var(--color-category-d)",
    Graphic: people,
  },
];
