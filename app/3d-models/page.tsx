import ModelGrid from "@/components/ModelGrid";
import { getModels, type Model } from "@/utils/models";
import { JSX } from "react";

const _3DModelsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
  }>;
}): Promise<JSX.Element> => {
  const models: Model[] = await getModels();
  const { query } = await searchParams;
  const filteredModels: Model[] = query
    ? models.filter(
        (model: Model) =>
          model.name.toLowerCase().includes(query.toLowerCase()) ||
          model.description.toLowerCase().includes(query.toLowerCase())
      )
    : models;

  return <ModelGrid type="3D Models" models={filteredModels} query={query} />;
};

export default _3DModelsPage;
