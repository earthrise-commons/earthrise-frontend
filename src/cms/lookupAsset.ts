const lookupAsset = (uuid: string, pageFiles: Array<{ uuid: string }>) => {
  const file = pageFiles.find((file) => file.uuid === uuid);
  if (!file) {
    throw new Error(`Asset not found: ${uuid}`);
  } else {
    return file;
  }
};

export default lookupAsset;
