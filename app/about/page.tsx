import Image from "next/image";
import { RiStackLine } from "react-icons/ri";
import { GoGlobe } from "react-icons/go";
import { FiFlag } from "react-icons/fi";
import aboutHeroImage from "@/public/hero-image-square.svg";
import footerLogo from "@/public/logo.svg";
import { JSX } from "react";

const AboutPage = (): JSX.Element => {
  return (
    <main>
      <section className="border-b border-[#DDDDDD] pb-10 sm:pb-16 px-6 sm:px-12 lg:px-20 xl:px-40 pt-8 sm:pt-10 mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] relative max-sm:flex-shrink-0 md:flex-1 flex justify-center lg:justify-end max-sm:aspect-square">
          <Image
            src={aboutHeroImage}
            alt="Hero Image"
            fill
            className="object-contain object-center lg:object-left rounded-sm"
          />
        </div>
        <div className="flex flex-col flex-1 xl:gap-6 gap-4">
          <p className="font-medium text-sm xl:text-base tracking-wider uppercase">
            About printforge
          </p>
          <h1 className="font-bold text-[32px] min-[400px]:text-4xl md:text-3xl lg:text-4xl xl:text-[56px]">
            Empowering makers worldwide
          </h1>
          <p className="text-base min-[400px]:text-2xl md:text-lg lg:text-xl xl:text-2xl">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
            <br />
            <br />
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </section>

      <section className="border-b border-[#DDDDDD] py-10 sm:py-16 px-6 sm:px-10 lg:px-16 xl:px-40 mx-auto flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-6 justify-center items-start">
        <div className="flex flex-1 flex-col gap-3 sm:gap-5 px-0 lg:px-6">
          <div className="flex items-center gap-2 md:gap-0.5 xl:gap-2">
            <RiStackLine className="text-2xl sm:text-[28px] md:text-xl lg:text-2xl xl:text-[28px]" />
            <h3 className="font-bold text-2xl min-[400px]:text-[28px] md:text-lg lg:text-2xl xl:text-[28px]">
              100K+ Models
            </h3>
          </div>
          <p className="min-[400px]:text-xl md:text-base lg:text-xl">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>

        <div className="seperator hidden md:block"></div>

        <div className="flex flex-1 flex-col gap-3 sm:gap-5 px-0 lg:px-6">
          <div className="flex items-center gap-2 md:gap-0.5 xl:gap-2">
            <GoGlobe className="text-2xl sm:text-[28px] md:text-xl lg:text-2xl xl:text-[28px]" />
            <h3 className="font-bold text-2xl min-[400px]:text-[28px] md:text-lg lg:text-2xl xl:text-[28px]">
              Active Locality
            </h3>
          </div>
          <p className="min-[400px]:text-xl md:text-base lg:text-xl">
            Join thousands of makers who share tips, provide feedback, and
            collaborate on projects.
          </p>
        </div>

        <div className="seperator hidden md:block"></div>

        <div className="flex flex-1 flex-col gap-3 sm:gap-5 px-0 lg:px-6">
          <div className="flex items-center gap-2 md:gap-0.5 xl:gap-2">
            <FiFlag className="text-2xl sm:text-[28px] md:text-xl lg:text-2xl xl:text-[28px]" />
            <h3 className="font-bold text-2xl min-[400px]:text-[28px] md:text-lg lg:text-2xl xl:text-[28px]">
              Free to Use
            </h3>
          </div>
          <p className="min-[400px]:text-xl md:text-base lg:text-xl">
            Most models are free to download, with optional premium features for
            power users.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 px-6 sm:px-12 lg:px-40 mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center">
        <div className="max-w-[665px] md:max-w-[400px] lg:max-w-[665px] flex flex-col gap-6">
          <h1 className="font-bold text-[32px] min-[400px]:text-4xl md:text-3xl lg:text-4xl xl:text-[56px]">
            Our vision
          </h1>
          <p className="text-base min-[400px]:text-2xl md:text-lg lg:text-xl xl:text-2xl">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what&apos;s
            possible with 3D printing.
          </p>
          <div className="horizontal-seperator min-[400px]:w-2/5 w-2/4 self-center"></div>
          <p className="text-base min-[400px]:text-2xl md:text-lg lg:text-xl xl:text-2xl">
            Whether you&apos;re a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
        </div>
      </section>

      <div className="w-full flex items-center justify-center py-8 sm:py-12">
        <Image
          src={footerLogo}
          alt="Footer logo"
          width={100}
          height={105}
          className="sm:w-[135px] sm:h-[139px]"
        />
      </div>
    </main>
  );
};

export default AboutPage;
