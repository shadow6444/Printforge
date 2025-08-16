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
    <div className="flex flex-col md:gap-4 gap-2 relative">
      <div className="flex max-sm:flex-col max-md:gap-6 justify-between md:items-center sticky bg-white opacity-95 max-lg:top-10 top-0 z-10 py-4">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-[32px] leading-tight max-sm:hidden">
          {type}
        </h1>
        <Form
          action=""
          className="border border-[#606060] rounded-full p-1.5 w-full sm:w-72"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for a model"
            className="px-3 py-1 w-full text-sm sm:text-base outline-none focus:outline-none"
            defaultValue={query}
            autoComplete="off"
          />
        </Form>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-[32px] leading-tight sm:hidden">
          {type}
        </h1>
      </div>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {models &&
          models.map((model: Model) => (
            <ModelCard key={model.id} model={model} />
          ))}
      </div>
    </div>
  );
};

export default ModelGrid;
