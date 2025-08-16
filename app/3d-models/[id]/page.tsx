import { getModelByID, type Model } from "@/utils/models";
import { FaRegHeart } from "react-icons/fa6";
import Image from "next/image";
import { JSX } from "react";
import modelImage from "@/public/hero-image-square.svg";

const ModelDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> => {
  const { id } = await params;
  const model: Model = await getModelByID(id);

  const isoDate: string = model.dateAdded;
  const date: Date = new Date(isoDate);
  const formatted: string = `${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(date.getDate()).padStart(2, "0")}/${date.getFullYear()}`;

  return (
    <section className="flex flex-col sm:flex-row gap-2 sm:gap-10 pb-6 pt-5 items-center justify-center sm:px-6 lg:px-10">
      <div className="w-full max-w-md lg:max-w-lg aspect-square relative">
        <Image
          src={modelImage}
          alt="model image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-3 w-full lg:w-sm mt-4 lg:mt-0">
        <div className="flex items-center gap-1 xl:text-2xl lg:text-xl">
          <FaRegHeart />
          <span>{model.likes}</span>
        </div>
        <h2 className="xl:text-[32px] lg:text-2xl font-bold sm:text-3xl max-sm:text-2xl">{model.name}</h2>
        <p className="border border-[#A1A1A1] px-3 py-1 rounded-full w-fit xl:text-base text-sm">
          <span>{model.category}</span>
        </p>
        <p className="xl:text-2xl text-xl">{model.description}</p>
        <p className="mt-4 xl:text-base text-sm">Added on {formatted}</p>
      </div>
    </section>
  );
};

export default ModelDetailPage;
