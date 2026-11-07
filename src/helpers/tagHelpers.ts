export type Tag = {
  label: string,
  description?: string
}

export type TagCategory = {
  label: string,
  description: string,
  tags: Record<string, Tag>
}

export const tagGroups: Record<string, TagCategory> = {
  lre: {
    label: 'Ikeda Framework',
    description: 'A three-point formula for sustainability education developed by Buddhist leader and educator Daisaku Ikeda.',
    tags: {
      learn: { label: 'Learn' },
      reflect: { label: 'Reflect' },
      empower: { label: 'Empower' }
    }
  },
  sdg: {
    label: 'UN Sustainable Development Goals',
    description: '',
    tags: {
      '1': { label: 'No Poverty' },
      '2': { label: 'Zero Hunger' },
      '3': { label: 'Good Health and Well-Being' },
      '4': { label: 'Quality Education' },
      '5': { label: 'Gender Equality' },
      '6': { label: 'Clean Water and Sanitation' },
      '7': { label: 'Affordable and Clean Energy' },
      '8': { label: 'Decent Work and Economic Growth' },
      '9': { label: 'Industry, Innovation and Infrastructure' },
      '10': { label: 'Reduced Inequalities' },
      '11': { label: 'Sustainable Cities and Communities' },
      '12': { label: 'Responsible Consumption and Production' },
      '13': { label: 'Climate Action' },
      '14': { label: 'Life Below Water' },
      '15': { label: 'Life on Land' },
      '16': { label: 'Peace, Justice and Strong Institutions' },
      '17': { label: 'Partnerships for the Goals' }
    }
  }
};

export const lookupTag = (tag: string): Tag => {
  const separatorIndex = tag.indexOf('-');
  if (separatorIndex < 1 || separatorIndex === tag.length - 1) {
    throw new Error(`Invalid tag: "${tag}"`);
  }

  const categoryId = tag.slice(0, separatorIndex);
  const tagId = tag.slice(separatorIndex + 1);
  const category = Object.hasOwn(tagGroups, categoryId)
    ? tagGroups[categoryId]
    : undefined;

  if (!category || !Object.hasOwn(category.tags, tagId)) {
    throw new Error(`Unknown tag: "${tag}"`);
  }

  return category.tags[tagId];
};

