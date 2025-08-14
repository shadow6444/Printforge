import categories from "./categories.json";

export type Category = {
  displayName: string;
  slug: string;
};

const getAllCategories = (): Category[] => {
  return categories;
};

const getCategoryBySlug = (slug: string): Category => {
  const category = categories.find((c: Category): boolean => c.slug === slug);
  if (!category) {
    throw new Error(`Category with slug ${slug} not found`);
  }
  return category;
};

const getDisplayNameFromSlug = (slug: string): string => {
  const category = getCategoryBySlug(slug);
  return category.displayName;
};

export { getAllCategories, getCategoryBySlug, getDisplayNameFromSlug };
