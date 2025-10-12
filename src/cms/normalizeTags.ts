import { parse as parseYaml } from "yaml";

export type Tag = { label: string; value: string };

export const normalizeTagsJSON = (jsonObj: object): Tag[] => {
  if (typeof jsonObj !== "object" || jsonObj === null) {
    return [];
  }
  const tags = Object.values(jsonObj)
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

export const normalizeTagsFromYaml = (yamlString: string): Tag[] => {
  const parsed = parseYaml(yamlString);
  return normalizeTagsJSON(parsed);
};
