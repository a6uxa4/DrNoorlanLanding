"use client";

import { AdvantagesCard } from "@/components/advantages/AdvantagesCard";
import { ADVANTAGES } from "@/utils/constants/advantages.constant";
import Marquee from "react-fast-marquee";

export const AdvantagesPage = () => {
  return (
    <div className="w-[100vw] bg-[#EEF9F9] relative flex justify-center items-start py-10 sm:py-5">
      <div className="flex flex-col gap-2">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
            Наши Преимущества
          </h1>
        </div>
        <div className="w-full px-5 md:block gap-3 max-w-[100vw] hidden">
          <Marquee speed={50} loop={0} pauseOnHover={true}>
            {ADVANTAGES.map((advantages) => (
              <AdvantagesCard key={advantages.id} advantages={advantages} />
            ))}
          </Marquee>
        </div>
        <div className="w-full px-10 flex gap-3 max-w-[100vw] md:hidden">
          {ADVANTAGES.map((advantages) => (
            <AdvantagesCard key={advantages.id} advantages={advantages} />
          ))}
        </div>
      </div>
    </div>
  );
};
