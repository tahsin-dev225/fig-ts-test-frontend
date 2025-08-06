import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { navItems } from "../Navbar/Navbar";

const Footer = () => {
  return (
    <div className="bg-footer bg-cover w-full bg-[#040B04] ">
      <div className=" xl:w-[85%] mx-auto">
        <div className=" pt-10">
          <h1 className="text-[30px] sm:text-[64px] xl:max-w-[60%] mt-16 font-akira mx-auto font-extrabold text-center ">
            Join our community{" "}
          </h1>

          <div className="my-5 flex justify-center items-center">
            <Button btnName="GET STARTED"></Button>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center w-max my-5 items-center bg-black/30 rounded-full gap-3 lg:gap-6 py-2 lg:py-3 px-2 px">
              {navItems?.map((item) => (
                <Link
                  className={`px-4 font-extrabold text-[8px] sm:text-[13px]  tracking-[0%] leading-[130%] text-white py-2.5 h-max rounded-2xl  `}
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-center text-[14px] font-normal text-[#aaa] mx-auto py-6">
            © 2024 Chronic Bag Chasers. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
