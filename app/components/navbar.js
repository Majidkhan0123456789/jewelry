"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/products", name: "Products" },
  { path: "/contact", name: "Contact" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav  className="hidden lg:flex  space-x-8 items-center">
      {Links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${pathname === link.path ? "text-gray-700" : "text-[#682A2A] "}   py-2 rounded-lg 2xl-text-2xl  xl:text-xl lg:text-xl md:text-base font-hankenGrotesk`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
export default Navbar;