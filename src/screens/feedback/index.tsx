"use client";

import { FEEDBACK_DATA, LOGOS } from "@/utils/constants/feedback.constant";
import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Rating from "@/components/UI/Rating/Rating";

export const FeedbackPage = () => {
  const { ref } = useSectionInView("Отзывы");

  return (
    <div
      ref={ref}
      id="feedbacks"
      className="w-[100vw] bg-[#f6f6f6] relative flex justify-center items-start py-10 bg-gold-400 sm:py-5 scroll-mt-24"
    >
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
            Наши отзывы
          </h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-16 px-10 max-w-[1440px]">
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
          <Marquee speed={100} loop={0} pauseOnHover={true}>
            {FEEDBACK_DATA.map((item, index) => (
              <div
                key={index}
                className="w-[500px] h-[300px] min-h-[300px] min-w-[500px] m-5 max-w-[500px] bg-white shadow-xl rounded-xl p-5 flex flex-col justify-start items-start"
              >
                <div className="w-full flex items-center justify-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff5955] text-white">
                    {item.name.split(" ")[0].split("")[0]}
                    {item.name.split(" ")[1].split("")[0]}
                  </div>
                  <div className="ml-4">
                    <p className="text-[15px] text-gray-800 tracking-wider">
                      {item.name}
                    </p>
                    <p className="text-[13px] text-gray-600">{item.data}</p>
                  </div>
                </div>
                <div className="mt-5">{item.describtion}</div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
