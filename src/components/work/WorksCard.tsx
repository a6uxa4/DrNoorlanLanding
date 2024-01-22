import Image from "next/image";
import React from "react";

export const WorksCard = ({ works }: any) => {
  return (
    <div className="bg-white shadow-md px-5 py-5 md:px-2 md:py-2 w-fit flex md:flex-col gap-5 items-center">
      <div className="relative mb-[30px]">
        <Image
          src={works.beforeImage}
          alt="beforeImage"
          className="md:w-[200px]"
        />
        <div className="w-[65px] h-[65px] lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] lg:text-[12px] bg-[#ff5955] rounded-full absolute left-[40%] bottom-[-30px] text-white flex items-center justify-center font-semibold">
          До
        </div>
      </div>
      <div className="md:rotate-90">
        <svg
          fill="#ff5955"
          viewBox="0 0 24 24"
          height="40px"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
        </svg>
      </div>
      <div className="relative mb-[30px]">
        <Image
          src={works.afterImage}
          alt="afterImage"
          className="md:w-[200px]"
        />
        <div className="w-[65px] h-[65px] lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] lg:text-[12px] bg-[#ff5955] rounded-full absolute left-[40%] bottom-[-30px] text-white flex items-center justify-center font-semibold">
          После
        </div>
      </div>
    </div>
  );
};
