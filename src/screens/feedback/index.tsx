"use client";

import { LOGOS } from "@/utils/constants/feedback.constant";
import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";
import Rating from "@/components/UI/Rating/Rating";

export const FeedbackPage = () => {
  const { ref } = useSectionInView("Отзывы");

  return (
    <div
      ref={ref}
      id="feedbacks"
      className="w-[100vw] bg-[#fafafa] relative flex justify-center items-start py-10 bg-gold-400 sm:py-5 scroll-mt-24"
    >
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
            Наши отзывы
          </h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5 px-10">
          <div className="w-fit h-[100px] flex items-center justify-center gap-5 rounded-xl">
            {LOGOS.map((item, index) => (
              <div
                key={index}
                className="w-32 h-32 shadow-md bg-white px-4 py-2 bg-center rounded-xl hover:scale-105 duration-250 cursor-pointer flex flex-col items-center justify-center"
              >
                <Image
                  src={item}
                  alt={`logo ${index}`}
                  className="w-full h-full object-contain"
                />
                <Rating rating={5} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
