"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { type Category, getAllCategories } from "@/utils/category";

const CategoriesNav = () => {
  const pathname = usePathname();
  const categories: Category[] = getAllCategories();

  return (
    <nav
      className="bg-white border-b border-gray-200 lg:fixed lg:w-48 lg:top-1/2 lg:-translate-y-1/2 lg:border-none">
      <ul
        className="flex lg:flex-col justify-start lg:justify-center xl:gap-4 lg:gap-3 gap-6 overflow-x-auto no-scrollbar whitespace-nowrap px-2 lg:px-0 py-2 lg:py-0 " >
        <NavLink
          href="/3d-models"
          className={`font-medium text-sm ${
            pathname === "/3d-models" &&
            "text-[#F77429] lg:pl-2 lg:border-l border-l-[#F77429]"
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
              "text-[#F77429] lg:pl-2 lg:border-l border-l-[#F77429]"
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
