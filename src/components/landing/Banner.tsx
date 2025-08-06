import React from "react";
import Button from "../ui/Button";

const Banner = () => {
  return (
    <div className="md:min-h-screen w-full bg-[#040B04] ">
      <div className=" bg-banner bg-cover xl:w-[85%] mx-auto">
        <div className="py-12 pt-20">
          <h1 className="text-3xl lg:text-[77px] xl:max-w-[60%] mt-8 mx-1.5 lg:mt-16 font-akira sm:mx-auto lg:font-extrabold text-center ">
            Welcome to Chronic Bag Chasers{" "}
          </h1>
          <p className="xl:max-w-[60%] leading-[150%] text-[11px] lg:text-[16px] font-extralight sm:font-normal text-center mx-1 sm:mx-auto my-5">
            Join a community of ambitious individuals chasing success together.
            Our platform is designed for those who are dedicated to personal
            growth and achieving financial success.{" "}
          </p>
          <div className="my-5 flex justify-center items-center">
            <Button btnName="GET STARTED"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
