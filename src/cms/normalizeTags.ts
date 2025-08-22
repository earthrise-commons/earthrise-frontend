import { parse as parseYaml } from "yaml";
export const normalizeTagsFromYaml = (yamlString: string): string[] => {
  const parsed = parseYaml(yamlString);
  if (typeof parsed !== "object" || parsed === null) {
    return [];
  }
  const tags = Object.values(parsed)
    .map((item) => {
      return item.split(", ");
    })
    .flatMap((item) => item)
    .filter((item) => {
      return item !== "";
    })
    .map((item) => ({ label: item, value: item }));
  // TODO: lookup tags from dictionary
  return tags;
};
