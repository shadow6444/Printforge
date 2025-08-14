import modelsData from "@/utils/models.json";

export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

const getModels = async ({
  category,
}: {
  category?: string;
} = {}): Promise<Model[]> => {
  let filteredModels: Model[] = [...modelsData];
  if (category) {
    filteredModels = modelsData.filter(
      (model: Model): boolean => model.category === category
    );
  }
  return filteredModels;
};

const getModelByID = async (id: string | number): Promise<Model> => {
  const foundModel = modelsData.find(
    (model: Model): boolean => model.id.toString() === id.toString()
  );
  if (!foundModel) throw new Error(`Model with ${id} not found`);

  return foundModel;
};

export { getModels, getModelByID };
