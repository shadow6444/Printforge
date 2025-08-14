import CategoriesNav from "@/components/CategoriesNav";

const ModelsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="container flex gap-10 pt-6 py-16 px-4 sm:px-6 lg:px-12 mx-auto min-h-[calc(100vh-113px)] relative">
      <CategoriesNav />
      <div className="flex-1 lg:ml-56">{children}</div>
    </section>
  );
};

export default ModelsLayout;
