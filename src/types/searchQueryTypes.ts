export interface SearchQueryType {
  query: string;
  page: string;
  types: string[];
}
export const pageTypes = [
  { label: "Articles", value: "article", color: "var(--color-category-a)" },
  { label: "Chapter", value: "chapter", color: "var(--color-category-b)" },
  { label: "Lesson", value: "lesson", color: "var(--color-category-c)" },
  { label: "Person", value: "person", color: "var(--color-category-d)" },
];
