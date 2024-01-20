"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { Typewriter } from "react-simple-typewriter";
import photoBanner from "../../assets/images/BannerPhoto.jpeg";

export const BannerPage = () => {
  const { ref } = useSectionInView("HOME");

  return (
    <div
      ref={ref}
      id="HOME"
      className="w-[100vw] h-[600px] relative flex justify-center items-center bg-[#eef9f9] bg-fixed md:h-[400px]"
    >
      <div
        style={{ backgroundImage: `url(${photoBanner.src})` }}
        className="w-full h-full flex items-center justify-between px-11 max-w-[1440px] blur-none md:justify-center bg-cover bg-no-repeat"
      >
        <div className="w-full min-w-[650px] max-w-[650px] font-mono font-black text-[40px] leading-[50px] tracking-wide md:text-[30px] md:max-w-[100vw] md:px-5 md:min-w-[100vw] xs:text-[20px]">
          <Typewriter
            words={[
              "Превосходный опыт",
              "Доверьте свою улыбку экспертам",
              "Радость здоровой улыбки - наша цель в",
              "Искусство здоровой улыбки начинается здесь, в нашей",
              "Качество заботы о вашей улыбке - наша страсть к",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={5000}
          />
          <span className="text-[#00d6d4]">стомотологии</span>
        </div>
      </div>
    </div>
  );
};
