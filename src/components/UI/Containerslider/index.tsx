import React, { ReactNode, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import clsx from "clsx";
import useWindowWidth from "@/hooks/useWindowWidth";

interface ContainerSliderProps {
  children: ReactNode;
  cardWidth: number;
}

export default function ContainerSlider({
  children,
  cardWidth,
}: ContainerSliderProps) {
  const swiperRef = useRef<any>(null);
  const windowWidth = useWindowWidth();

  const [canSlidePrev, setCanSlidePrev] = useState<boolean>(false);
  const [canSlideNext, setCanSlideNext] = useState<boolean>(true);

  const goNext = () => {
    if (swiperRef.current && canSlideNext) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && canSlidePrev) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 px-5 relative">
      <div
        onClick={goPrev}
        style={{ backgroundColor: canSlidePrev ? "#ff5955" : "gainsboro" }}
        className={clsx(
          "p-1.5 cursor-pointer text-white rounded-lg absolute left-2 z-10 top-[150px]",
          {
            "pointer-events-none": !canSlidePrev,
          }
        )}
      >
        <MdOutlineNavigateBefore size={20} />
      </div>
      <div
        onClick={goNext}
        style={{ backgroundColor: canSlideNext ? "#ff5955" : "gainsboro" }}
        className={clsx(
          "p-1.5 cursor-pointer text-white rounded-lg absolute right-2 z-10 top-[150px]",
          {
            "pointer-events-none": !canSlideNext,
          }
        )}
      >
        <MdOutlineNavigateNext size={20} />
      </div>
      <div className="w-full">
        <Swiper
          ref={swiperRef}
          slidesPerView={
            windowWidth > 1440 ? 4 : Math.floor(windowWidth / cardWidth)
          }
          spaceBetween={20}
          onSlideChange={({ isBeginning, isEnd }) => {
            setCanSlidePrev(!isBeginning);
            setCanSlideNext(!isEnd);
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
}
