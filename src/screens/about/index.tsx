"use client";

import BannerPhoto from "../../assets/images/Banner.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT } from "@/utils/constants/about.constant";
import { AboutCard } from "@/components/about/AboutCard";
import { ResponsiveAbout } from "@/components/about/ResponsiveAbout";

export const AboutPage = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
      },
    }),
  };

  const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: -300,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
      },
    }),
  };

  return (
    <div className="w-[100vw] bg-[#eef9f9] relative flex justify-center items-start py-10 sm:py-5 text-center">
      <div className="w-full flex flex-col items-center justify-between gap-2 max-w-[1440px]">
        <div className="py-5 w-full flex items-center justify-center max-w-[400px]">
          <h1 className="text-lg font-bold font-mono lg:text-[20px] sm:text-[14px]">
            Вам необходимо знать из чего состоит качественная услуга
            стоматологии
          </h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-full h-full relative flex items-center justify-center max-w-[500px] xl:hidden">
            <motion.div
              className="w-[350px] h-[350px] rounded-full bg-gradient-to-b from-[#d7fffe] via-[#40fffc] to-[#00d6d4] shadow-xl"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            ></motion.div>
            <motion.div
              className="w-[250px] h-[350px] absolute top-0"
              variants={fadeAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <Image
                src={BannerPhoto}
                alt="BannerPhoto"
                className="w-[250px] h-[350px]"
              />
            </motion.div>
          </div>
          <div className="w-full flex xl:items-center xl:justify-center gap-3 xs:hidden">
            {ABOUT.map((about) => (
              <AboutCard key={about.id} about={about} />
            ))}
          </div>
          <ResponsiveAbout />
        </div>
      </div>
    </div>
  );
};
