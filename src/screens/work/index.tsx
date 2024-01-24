"use client";

import { WORK_DATA } from "@/utils/constants/work.constant";
import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import { EffectFade, Navigation } from "swiper/modules";

export const WorkPage = () => {
  const { ref } = useSectionInView("Примеры работ");

  const swiperTopRef = useRef<any>(null);
  const swiperBottomRef = useRef<any>(null);

  const windowWidth = useWindowWidth();

  const goNext = () => {
    if (swiperTopRef.current) {
      swiperTopRef.current.swiper.slideNext();
    }
    if (swiperBottomRef.current) {
      swiperBottomRef.current.swiper.slidePrev();
    }
  };

  const goPrev = () => {
    if (swiperTopRef.current) {
      swiperTopRef.current.swiper.slidePrev();
    }
    if (swiperBottomRef.current) {
      swiperBottomRef.current.swiper.slideNext();
    }
  };

  console.log(Math.floor(windowWidth / 250));

  return (
    <div
      ref={ref}
      id="works"
      className="w-full py-10 sm:py-5 scroll-mt-24 bg-[#f6f6f6]"
    >
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          Примеры работ
        </h1>
      </div>
      <div className="w-full flex items-center justify-center gap-5 flex-wrap px-5 m-auto max-w-[1440px]">
        <Button onClick={goPrev} className="bg-[gainsboro]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="#ff5955"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Button onClick={goNext} className="bg-[gainsboro]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="#ff5955"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <div className="w-full max-w-[100vw] m-auto px-5 gap-5">
          <Swiper
            ref={swiperTopRef}
            slidesPerView={
              windowWidth > 1440 ? 4 : Math.floor(windowWidth / 250)
            }
            spaceBetween={20}
            loop={true}
            modules={[Navigation, EffectFade]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {WORK_DATA.slice(0, 12).map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-[250px] h-[250px] rounded-2xl cursor-pointer"
              >
                <Image
                  className="w-[250px] h-[250px] rounded-2xl object-cover"
                  src={item}
                  alt={`${index}PhotoWork`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full max-w-[100vw] m-auto px-5 gap-5">
          <Swiper
            ref={swiperBottomRef}
            slidesPerView={
              windowWidth > 1440 ? 4 : Math.floor(windowWidth / 250)
            }
            spaceBetween={20}
            loop={true}
            modules={[Navigation, EffectFade]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {WORK_DATA.slice(12, 24).map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-[250px] h-[250px] rounded-2xl cursor-pointer"
              >
                <Image
                  className="w-[250px] h-[250px] rounded-2xl object-cover"
                  src={item}
                  alt={`${index}PhotoWork`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
