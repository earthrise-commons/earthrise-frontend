import { parse as parseYaml } from "yaml";
export const normalizeTagsFromYaml = (yamlString: string): string[] => {
  const parsed = parseYaml(yamlString);
  parsed.other = parsed.other.split(", ");
  const tags = Object.values(parsed)
    .flatMap((item) => item)
    .filter((item) => {
      return item !== "";
    })
    .map((item) => ({ label: item, value: item }));
  // TODO: lookup tags from dictionary
  return tags;
};
