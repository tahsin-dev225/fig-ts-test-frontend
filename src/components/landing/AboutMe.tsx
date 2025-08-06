import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="xl:max-w-[85%] px-3 mx-auto my-24">
      <div className=" mb-2 ">
        <div className="flex gap-4 sm:gap-8 items-center mt-4">
          <Image
            src={"/img/point.png"}
            className="size-12"
            height={80}
            width={80}
            alt="point"
          />
          <h3 className="font-inter text-[20px] font-medium text-[#77DB32] ">
            Who We Are
          </h3>
        </div>
        <h2 className="font-akira font-extrabold ml-4 sm:ml-20 mt-4 sm:mt-0 pt-0 text-[20px] md:text-[40px]  max-w-2xl ">
          About me
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:ml-[74px] px-4 gap-6 justify-between  rounded-2xl">
        <div className="lg:w-[100%]">
          <p className="text-sm font-light md:w-[90%]">
            Hello everyone! My name’s Jesse and I am just a kid who wants to
            share my passion in using fitness to sharpen the mind and get you on
            track to be the person you have dreamed of becoming. I am a student
            at San Diego State University and entrepreneur in online coaching.
            Fitness has been a big part of my life for as long as I have been
            working towards my goals. Let me help you jump back into your
            lifestyle in the healthiest way, body and mind.
          </p>
          <h3 className="text-[24px] font-akira my-5 font-bold">
            Online Coaching
          </h3>
          <h2 className="font-akira text-[32px] my-3 text-[#8FEF2F]">
            $ 200
            <span className="text-[16px] text-white font-medium">/month</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="size-6 p-0.5 text-black my-3 rounded-full flex justify-center items-center bg-[#8FEF2F]">
              <Check />
            </div>
            <p className="">Monthly Subscription</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-6 p-0.5 text-black my-3 rounded-full flex justify-center items-center bg-[#8FEF2F]">
              <Check />
            </div>
            <p className="">Diet plan accustomed to your specific goals</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-6 p-0.5 text-black my-3 rounded-full flex justify-center items-center bg-[#8FEF2F]">
              <Check />
            </div>
            <p className="">Training plan accustomed to your specific goals</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-6 p-0.5 text-black my-3 rounded-full flex justify-center items-center bg-[#8FEF2F]">
              <Check />
            </div>
            <p className="">Weekly/Biweekly Calls on progress checks</p>
          </div>
        </div>
        <div className="flex items-center w-full p-5 justify-center">
          <Image
            src={"/img/earth.png"}
            className="w-[90%]"
            height={700}
            width={900}
            alt="earth"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
