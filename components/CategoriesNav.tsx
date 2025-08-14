"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { type Category, getAllCategories } from "@/utils/category";

const CategoriesNav = () => {
  const pathname = usePathname();
  const categories: Category[] = getAllCategories();

  return (
    <nav className="sticky top-0 z-10 w-full border-b border-gray-200 lg:fixed lg:w-48 lg:top-1/2 lg:-translate-y-[47%] lg:border-none">
      <ul className="flex flex-col justify-center gap-4">
        <NavLink
          href={"/3d-models"}
          className={`font-medium text-sm ${
            pathname === "/3d-models" &&
            "text-[#F77429] pl-2 border-l border-l-[#F77429]"
          }`}
        >
          All
        </NavLink>
        {categories.map((cat: Category) => (
          <NavLink
            key={cat.slug}
            href={`/3d-models/categories/${cat.slug}`}
            className={`font-medium text-sm ${
              pathname === `/3d-models/categories/${cat.slug}` &&
              "text-[#F77429] pl-2 border-l border-l-[#F77429]"
            }`}
          >
            {cat.displayName}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesNav;
