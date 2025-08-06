import Image from "next/image";
import React from "react";

const WhyJoin = () => {
  return (
    <div className="xl:max-w-[85%] px-1.5 sm:mx-auto my-8 mt-14">
      <div className=" mb-12">
        <div className="flex gap-8 items-center mt-4">
          <Image
            src={"/img/point.png"}
            className="size-12"
            height={80}
            width={80}
            alt="point"
          />
          <h3 className="font-inter text-[16px] md:text-[20px] font-medium text-[#77DB32] ">
            WHY JOIN US
          </h3>
        </div>
        <h2 className="font-akira ml-20 mt-0 pt-0 text-[20px] md:text-[40px]  max-w-2xl ">
          Why Join Our Community?
        </h2>
      </div>
      <div className="bg-gradient-to-r grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-6 px-4 gap-2 justify-between items-center rounded-2xl from-[#212020d6] to-black">
        <div className="mx-10 my-4">
          <div className="size-12 relative flex justify-center items-center p-3">
            <div className="absolute top-0 h-full w-full blur-sm bg-green-600  rounded-full  p-3.5"></div>
            <Image
              src={"/img/active.png"}
              className="z-30"
              height={70}
              width={80}
              alt="knowle"
            />
          </div>

          <h2 className="max-w-36 font-semibold text-2xl my-5 mt-8">
            Active Community{" "}
          </h2>
          <p className="sm:max-w-60">
            Connect with like-minded individuals committed to growth and
            success. This is a space for sharing experiences, insights, and
            support.
          </p>
        </div>
        <div className="mx-5 my-4">
          <div className="size-12 relative flex justify-center items-center p-3">
            <div className="absolute top-0 h-full w-full blur-sm bg-green-600  rounded-full  p-3.5"></div>
            <Image
              src={"/img/knowledge.png"}
              className="z-30"
              height={70}
              width={80}
              alt="knowlege"
            />
          </div>
          <h2 className="max-w-36  font-semibold text-2xl my-5 mt-8">
            Active Community{" "}
          </h2>
          <p className="sm:max-w-60">
            Connect with like-minded individuals committed to growth and
            success. This is a space for sharing experiences, insights, and
            support.
          </p>
        </div>
        <div className="mx-5 my-4">
          <div className="size-12 relative flex justify-center items-center p-3">
            <div className="absolute top-0 h-full w-full blur-sm bg-green-600  rounded-full  p-3.5"></div>
            <Image
              src={"/img/growth.png"}
              className="z-30"
              height={70}
              width={80}
              alt="knowledge"
            />
          </div>
          <h2 className="max-w-36  font-semibold text-2xl my-5 mt-8">
            Active Community{" "}
          </h2>
          <p className="sm:max-w-60">
            Connect with like-minded individuals committed to growth and
            success. This is a space for sharing experiences, insights, and
            support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
