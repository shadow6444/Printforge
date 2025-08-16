import CategoriesNav from "@/components/CategoriesNav";

const ModelsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="container relative pt-4 sm:pt-6 py-12 sm:py-16 px-6 min-[426px]:px-10 sm:px-6 md:px-8 lg:px-12 mx-auto min-h-[calc(100vh-113px)]">
      <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-10">
        <div className="lg:w-48 sticky top-0 z-20 lg:static ">
          <CategoriesNav />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
};

export default ModelsLayout;
