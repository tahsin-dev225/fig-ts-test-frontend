import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Membership = () => {
  return (
    <div className="xl:max-w-[85%] mx-auto my-8 mt-14">
      <div className=" mb-2">
        <div className="flex gap-4 sm:gap-8 items-center mt-4">
          <Image
            src={"/img/point.png"}
            className="size-12"
            height={80}
            width={80}
            alt="point"
          />
          <h3 className="font-inter text-[15px] sm:text-[20px] font-medium text-[#77DB32] ">
            PRICING
          </h3>
        </div>
        <h2 className="font-akira font-extrabold ml-4 sm:ml-20 mt-4 sm:mt-0 pt-0 text-[20px] sm:text-[40px]  max-w-xl ">
          Membership Plans
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row p-4 sm:ml-[74px] px-4 gap-8 justify-between  rounded-2xl">
        <div className="lg:w-[100%] p-3">
          <div className="border-b pb-5 border-b-[#262626]">
            <h1 className="font-semibold text-lg my-4">
              Basic Membership – VIP{" "}
            </h1>
            <div className="flex justify-between items-center ">
              <p className="w-[80%] font-light text-gray-400">
                Unlock Premium Tools, Expert Insights, and a Thriving
                Community—All in One VIP Package!
              </p>
              <div className="rounded-full border bg-[#8FEF2F] flex justify-center items-center text-black size-9">
                <ArrowUpRight />
              </div>
            </div>
          </div>
          <div className="border-b pb-5 border-b-[#262626]">
            <h1 className="font-semibold text-lg my-4">
              Premium Membership – Ultra-VIP{" "}
            </h1>
            <div className="flex justify-between items-center ">
              <p className="w-[80%] font-light text-gray-400">
                Experience Elite Trading with Early Signals, Advanced
                Strategies, and Exclusive Market Insights!
              </p>
              <div className="rounded-full border border-gray-500 flex justify-center items-center  size-9">
                <ArrowUpRight />
              </div>
            </div>
          </div>
          <div className="border-b pb-5  border-b-[#262626]">
            <h1 className="font-semibold text-lg my-4">
              Elite Membership – Cadet{" "}
            </h1>
            <div className="flex justify-between items-center ">
              <p className="w-[80%] font-light text-gray-400">
                Achieve Trading Mastery with Expert Coaching, Exclusive Content,
                and Premium Market Access!
              </p>
              <div className="rounded-full border border-gray-600 flex justify-center items-center text-white size-9">
                <ArrowUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r rounded-2xl from-[#212020d6] to-black p-5 w-full">
          <h3 className="text-[18px] md:text-[24px] font-akira mt-5 mb-2 font-bold">
            Basic Membership – VIP
          </h3>
          <h2 className="font-akira text-[24px] md:text-[32px] mb-3 text-[#8FEF2F]">
            $24.99
            <span className="text-[16px] text-white font-medium">/month</span>
          </h2>
          <div className="flex my-4 items-start gap-4">
            <div className="size-5 p-0.5 text-black my-3 rounded-full flex justify-center items-center bg-[#8FEF2F]">
              <Check />
            </div>
            <div className="">
              <p className="text-[16px] font-semibold">
                Real-Time Premium Signals
              </p>
              <p className="text-[12px] font-normal text-[#bbb]">
                Get timely trade signals to make smarter trading decisions.
              </p>
            </div>
          </div>
          <div className="flex my-4 items-start gap-4">
            <div className="size-5 p-0.5 text-black my-3 rounded-full flex justify-center items-center bg-[#8FEF2F]">
              <Check />
            </div>
            <div className="">
              <p className="text-[16px] font-semibold">Market Insights</p>
              <p className="text-[12px] font-normal text-[#bbb]">
                Receive daily market updates and trend analysis to stay
                informed.
              </p>
            </div>
          </div>
          <div className="flex my-4 items-start gap-4">
            <div className="size-5 p-0.5 text-black my-3 rounded-full flex justify-center items-center bg-[#8FEF2F]">
              <Check />
            </div>
            <div className="">
              <p className="text-[16px] font-semibold">Community Support</p>
              <p className="text-[12px] font-normal text-[#bbb]">
                Connect with fellow traders in our exclusive VIP channels
              </p>
            </div>
          </div>
          <div className="my-5 flex justify-start items-center">
            <Button btnName="JOIN NOW"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
