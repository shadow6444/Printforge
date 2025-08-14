import Link from "next/link";

const NavLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        className={`hover:text-[#F77429] transition-colors tracking-wider uppercase text-[#606060] ${className}`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
