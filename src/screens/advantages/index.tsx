"use client";

import CustomSVG from "@/components/UI/CustomSvg/CustomSvg";
import { ADVANTAGES } from "@/utils/constants/advantages.constant";

export const AdvantagesPage = () => {
  return (
    <div className="w-[100vw] bg-[#fafafa] relative flex justify-center items-start py-10 sm:py-5">
      <div className="w-full max-w-[1440px] grid place-items-center grid-rows-2 grid-cols-3 gap-y-10">
        {ADVANTAGES.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-center gap-5 w-[310px] h-fit"
          >
            <div className="flex items-center justify-center gap-2">
              <CustomSVG
                paths={item.icon.paths}
                width={item.icon.width}
                height={item.icon.height}
                className="fill-[#ff5955]"
              />
              <h1 className="text-[18px] font-semibold">{item.name}</h1>
            </div>
            <div>
              <p className="text-[15px]">{item.describtion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
