const removeRegex = /\b(Village|Town|City) of\b/;
const normalizePlaceName = (placeName: string) => {
  return placeName.replace(removeRegex, "").trim();
};

export default normalizePlaceName;
