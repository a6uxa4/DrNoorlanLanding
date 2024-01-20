"use client";

import { WorkCard } from "@/components/work/WorkCard";
import { WorksCard } from "@/components/work/WorksCard";
import { WORK_DATA } from "@/utils/constants/work.constant";
import { useState } from "react";
import { motion } from "framer-motion";
import { ResponsiveWork } from "@/components/work/ResponsiveWork";
import { useSectionInView } from "@/hooks/useSectionInView";

export const WorkPage = () => {
  const { ref } = useSectionInView("Примеры работ");
  const [selectedWork, setSelectedWork] = useState(1);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * index * 2,
      },
    }),
  };

  return (
    <div ref={ref} id="works" className="w-full py-10 sm:py-5 scroll-mt-24">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          Примеры работ
        </h1>
      </div>
      <div className="w-full flex items-start justify-evenly gap-[100px] px-5 m-auto max-w-[1440px] sm:hidden">
        <div className="w-full flex flex-col gap-5 max-w-fit ml-[100px] md:ml-[30px]">
          {WORK_DATA.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              id={selectedWork}
              onClick={setSelectedWork}
            />
          ))}
        </div>
        <div className="w-full flex flex-col gap-5 md:flex-row">
          {WORK_DATA[selectedWork - 1].works.map((works, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index + 1}
              className="max-h-[250px] md:max-h-fit"
            >
              <WorksCard works={works} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block w-full max-w-[1440px] m-auto">
        <ResponsiveWork />
      </div>
    </div>
  );
};
