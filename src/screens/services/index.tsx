"use client";

import { SERVICES_DATA } from "@/utils/constants/services.constant";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import Image from "next/image";

export const ServicesPage = () => {
  const { ref } = useSectionInView("Услуги");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div ref={ref} id="services" className="w-full py-10 sm:py-5 scroll-mt-24">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          Наши Услуги
        </h1>
      </div>
      <div className="w-full px-5 grid grid-cols-6 place-items-center gap-5 place-content-center max-w-[1440px] m-auto lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xs:gap-2">
        {SERVICES_DATA.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={item.id}
            className="w-[200px] h-[150px] flex flex-col rounded-xl text-center cursor-pointer items-center justify-center hover:bg-[#e7e7e7] transition gap-2 xl:w-[160px] xl:h-[110px] md:w-[140px] md:h-[90px] xs:w-[130px] xs:h-[80x]"
          >
            <Image
              src={item.icon}
              alt="icon"
              className="xl:w-[60px] md:w-[40px] xs:w-[35px]"
            />
            <h1 className="md:text-[14px] sm:text-[12px] xs:text-[10px]">
              {item.name}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
