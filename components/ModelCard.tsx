import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import modelImage from "@/public/hero-image-square.svg";
import type { Model } from "@/utils/models";
import { JSX } from "react";

const ModelCard = ({ model }: { model: Model }): JSX.Element => {
  return (
    <Link
      href={`/3d-models/${model.id}`}
      className="rounded-xl w-full h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="w-full aspect-square relative rounded-t-xl overflow-hidden">
        <Image
          src={modelImage}
          alt="model image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between p-4 gap-4 border-x border-b rounded-b-xl border-[#A1A1A1]">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold line-clamp-1">{model.name}</h2>
          <p className="line-clamp-3">{model.description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="border border-[#A1A1A1] px-3 py-1 rounded-full w-fit">
            <span>{model.category}</span>
          </p>
          <div className="flex items-center gap-1">
            <FaRegHeart />
            <span>{model.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ModelCard;
