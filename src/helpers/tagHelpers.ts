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
    label: 'Ikeda Framework: Learn/Reflect/Empower',
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
      '1-poverty': { label: 'SDG 1: No Poverty' },
      '2-hunger': { label: 'SDG 2: Zero Hunger' },
      '3-health': { label: 'SDG 3: Good Health and Well-being' },
      '4-education': { label: 'SDG 4: Quality Education' },
      '5-gender': { label: 'SDG 5: Gender Equality' },
      '6-water': { label: 'SDG 6: Clean Water and Sanitation' },
      '7-energy': { label: 'SDG 7: Affordable and Clean Energy' },
      '8-work': { label: 'SDG 8: Decent Work and Economic Growth' },
      '9-industry': { label: 'SDG 9: Industry, Innovation, and Infrastructure' },
      '10-inequality': { label: 'SDG 10: Reduced Inequalities' },
      '11-cities': { label: 'SDG 11: Sustainable Cities and Communities' },
      '12-consumption': { label: 'SDG 12: Responsible Consumption and Production' },
      '13-climate': { label: 'SDG 13: Climate Action' },
      '14-oceans': { label: 'SDG 14: Life Below Water' },
      '15-land': { label: 'SDG 15: Life on Land' },
      '16-peace': { label: 'SDG 16: Peace, Justice, and Strong Institutions' },
      '17-partnerships': { label: 'SDG 17: Partnerships for the Goals' }
    }
  },
  idg: {
    label: 'Inner Development Goals',
    description: '',
    tags: {
      being: { label: 'Being: Relationship to Self' },
      thinking: { label: 'Thinking: Cognitive Skills' },
      relating: { label: 'Relating: Caring for Others and the World' },
      collaborating: { label: 'Collaborating: Social Skills' },
      acting: { label: 'Acting: Enabling Change' }
    }
  },
  lvl: {
    label: 'Grade Level',
    description: '',
    tags: {
      elementary: { label: 'Elementary School' },
      middle: { label: 'Middle School' },
      highschool: { label: 'High School' },
      undergrad: { label: 'Undergraduate' },
      graduate: { label: 'Graduate+' }
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
