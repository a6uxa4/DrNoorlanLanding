"use client";

import ContainerSlider from "@/components/UI/Containerslider";
import { PersonalCard } from "@/components/personal/PersonalCard";
import { useSectionInView } from "@/hooks/useSectionInView";
import { PERSONALS } from "@/utils/constants/personal.constant";
import React from "react";
import { SwiperSlide } from "swiper/react";

export const PersonalPage = () => {
  const { ref } = useSectionInView("Врачи");

  return (
    <div ref={ref} id="personals" className="w-full py-10 sm:py-5 scroll-mt-24">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          Наши доктора
        </h1>
      </div>
      <div className="w-full max-w-[100vw] m-auto hidden xl:items-center gap-5 xl:justify-center xl:block">
        <ContainerSlider cardWidth={300}>
          {PERSONALS.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-full mt-[50px] !flex !items-center !justify-center"
            >
              <PersonalCard personal={item} />
            </SwiperSlide>
          ))}
        </ContainerSlider>
      </div>
      <div className="w-full items-center justify-center max-w-[1440px] m-auto flex gap-5 mt-[70px] xl:hidden">
        {PERSONALS.map((item) => (
          <PersonalCard key={item.id} personal={item} />
        ))}
      </div>
    </div>
  );
};
