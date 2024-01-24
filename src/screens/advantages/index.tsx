"use client";

import CustomSVG from "@/components/UI/CustomSvg/CustomSvg";
import { ADVANTAGES } from "@/utils/constants/advantages.constant";

export const AdvantagesPage = () => {
  return (
    <div className="w-[100vw] bg-[#f6f6f6] relative flex flex-col justify-center items-start py-10 sm:py-5">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          Почему нас выбирают
        </h1>
      </div>
      <div className="w-full max-w-[1440px] grid place-items-center grid-rows-2 grid-cols-3 gap-y-10 m-auto xl:grid-cols-2 md:grid-cols-1 md:px-5">
        {ADVANTAGES.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-center gap-5 w-[310px] h-fit md:w-full"
          >
            <div className="flex items-center justify-center gap-2">
              <CustomSVG
                paths={item.icon.paths}
                width={item.icon.width}
                height={item.icon.height}
                className="fill-[#ff5955] lg:w-[40px]"
              />
              <h1 className="text-[18px] font-semibold lg:text-[16px] sm:text-[14px]">
                {item.name}
              </h1>
            </div>
            <div>
              <p className="text-[15px] lg:text-[13px] sm:text-[12px]">
                {item.describtion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
