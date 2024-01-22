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
        delay: 0.05 * index - 1,
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
      <div className="w-full grid grid-cols-6 place-items-center gap-5 place-content-center max-w-[1440px] m-auto">
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
            className="w-[200px] h-[150px] flex flex-col rounded-xl text-center cursor-pointer items-center justify-center hover:bg-[#545454] hover:text-white transition gap-2"
          >
            <Image src={item.icon} alt="icon" />
            <h1>{item.name}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
