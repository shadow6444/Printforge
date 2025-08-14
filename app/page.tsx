import Image from "next/image";
import homeHeroImage from "@/public/hero-image.svg";
import { JSX } from "react";
import Link from "next/link";

const HomePage = (): JSX.Element => {
  return (
    <main>
      <section className="flex flex-col md:flex-row max-w-[1440px] gap-8 lg:gap-12 justify-center xl:items-center px-6 sm:px-10 lg:px-20 pt-8 pb-4 mx-auto">
        <div className="flex flex-col gap-4 lg:gap-5 max-w-xl">
          <p className="font-medium text-xs lg:text-sm xl:text-base tracking-wider uppercase hidden md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="font-bold text-3xl lg:text-[45px] xl:text-[56px]">
            Discover what’s possible with 3D printing
          </h1>
          <p className="text-md lg:text-xl xl:text-[28px] leading-relaxed">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <div className="flex">
            <Link
              href="/3d-models"
              className="border-2 border-black py-2 px-5  bg-white transition duration-150 hover:bg-black hover:text-white cursor-pointer font-semibold text-lg lg:text-xl uppercase mt-4 lg:mt-8 "
            >
              Browse models
            </Link>
          </div>
        </div>
        <div className="w-full max-w-sm sm:max-w-md xl:max-w-none h-72 sm:h-96 lg:h-[550px] relative">
          <Image
            src={homeHeroImage}
            className="object-contain lg:object-top rounded-full"
            fill
            alt="Hero Image"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
