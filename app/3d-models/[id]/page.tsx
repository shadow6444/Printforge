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
    <section className="flex-1 flex gap-10 pb-4 pt-5 items-center justify-center px-10">
      <div className="w-lg aspect-square relative">
        <Image
          src={modelImage}
          alt="model image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-3 w-sm">
        <div className="flex items-center gap-1">
          <FaRegHeart />
          <span>{model.likes}</span>
        </div>
        <h2 className="text-[22px] font-bold line-clamp-1">{model.name}</h2>
        <p className="border border-[#A1A1A1] px-3 py-1 rounded-full w-fit">
          <span>{model.category}</span>
        </p>
        <p className="line-clamp-3">{model.description}</p>
        <p className="mt-4">Added on {formatted}</p>
      </div>
    </section>
  );
};

export default ModelDetailPage;
