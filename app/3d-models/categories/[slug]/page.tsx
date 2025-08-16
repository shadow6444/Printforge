import ModelGrid from "@/components/ModelGrid";
import { getDisplayNameFromSlug } from "@/utils/category";
import { getModels, type Model } from "@/utils/models";
import { JSX } from "react";

const ModelCategoryPage = async ({
  params,
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
  }>;
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> => {
  const { slug } = await params;
  const category = getDisplayNameFromSlug(slug);
  const models: Model[] = await getModels({ category: slug });
  const { query } = await searchParams;
  const filteredModels: Model[] = query
    ? models.filter(
        (model: Model) =>
          model.name.toLowerCase().includes(query.toLowerCase()) ||
          model.description.toLowerCase().includes(query.toLowerCase())
      )
    : models;

  return <ModelGrid type={category} models={filteredModels} />;
};

export default ModelCategoryPage;
