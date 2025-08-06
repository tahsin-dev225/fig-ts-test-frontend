import Image from "next/image";
import React from "react";
import logo from "../../assets/cbdlogo.png";
import Link from "next/link";
import Button from "../ui/Button";

type NavItem = {
  name: string;
  href: string;
};

export const navItems: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "why join us?", href: "/why-join" },
  { name: "who we are?", href: "/who-we" },
  { name: "pricing", href: "/pricing" },
];

const Navbar = () => {
  return (
    <div className="w-full font-akira absolute bg-gradient-to-b from-black/70 to-black/20">
      <div className="flex justify-between items-center container xl:w-[85%] mx-auto  py-4">
        <div className="mx-2">
          <Image
            src={logo}
            className="sm:w-10 w-5"
            height={60}
            width={60}
            alt="logo"
          />
        </div>
        <div className="flex sm:gap-2.5 px-1.5 py-1 items-center rounded justify-center">
          {navItems?.map((item) => (
            <Link
              className={`px-4 font-light sm:font-extrabold text-[8px] lg:text-[11px] items-center  tracking-[0%] leading-[130%] text-white py-2.5 h-max rounded-2xl ${
                item.name === "HOME" && "bg-[#8FEF2F] text-black!"
              } `}
              key={item.name}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="">
          <Button classN="hidden lg:block" btnName="GET STARTED"></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
