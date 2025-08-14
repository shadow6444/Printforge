import { type Model } from "@/utils/models";
import Form from "next/form";
import ModelCard from "./ModelCard";
import { JSX } from "react";

const ModelGrid = ({
  type,
  models,
  query,
}: {
  type: string;
  models?: Model[] | undefined;
  query?: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center sticky bg-white opacity-95 top-0 z-10 py-4">
        <h1 className="font-bold text-[32px] leading-tight">{type}</h1>
        <Form
          action=""
          className="border border-[#606060] rounded-full p-1.5 w-72"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for a model"
            className="px-3 py-1 w-full outline-none focus:outline-none"
            defaultValue={query}
            autoComplete="off"
          />
        </Form>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models &&
          models.map((model: Model) => (
            <ModelCard key={model.id} model={model} />
          ))}
      </div>
    </div>
  );
};

export default ModelGrid;
