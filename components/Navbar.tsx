"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/printforge-logo.svg";
import mobileLogo from "@/public/printforge-logo-icon.svg";
import { JSX } from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row items-center justify-between px-4 lg:px-14 py-4 gap-2 sm:gap-0">
      <Link href={"/"} className="flex items-center">
        <Image
          src={mobileLogo}
          alt="main logo icon"
          width={40}
          height={40}
          className="block sm:hidden"
        />
        <Image
          src={logo}
          alt="main logo"
          width={200}
          height={40}
          className="hidden sm:block"
        />
      </Link>
      <ul className="flex items-center gap-6 text-sm sm:text-base">
        <NavLink
          href={"/3d-models"}
          className={`uppercase font-semibold tracking-wider py-1 sm:py-2 ${
            pathname.startsWith("/3d-models") &&
            "text-[#F77429] underline underline-offset-8"
          }`}
        >
          3D Models
        </NavLink>
        <NavLink
          href={"/about"}
          className={`font-semibold py-1 sm:py-2 ${
            pathname === "/about" &&
            "text-[#F77429] underline underline-offset-8"
          }`}
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
