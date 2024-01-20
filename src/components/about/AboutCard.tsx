import CustomSVG from "@/components/UI/CustomSvg/CustomSvg";
import { motion } from "framer-motion";

export const AboutCard = ({ about }: any) => {
  const fadeAnimationAbout = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 * index,
      },
    }),
  };
  return (
    <div className="w-[250px] flex flex-col items-center justify-start gap-5">
      <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px] bg-white flex items-center justify-center rounded-full relative">
        <div className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-[#eef9f9] absolute top-0 left-0"></div>
        <motion.div
          variants={fadeAnimationAbout}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={about.id}
          className="w-6 h-6 md:w-5 md:h-5 rounded-full bg-[#00d6d4] absolute top-0 left-0 text-white md:text-[14px]"
        >
          {about.id}
        </motion.div>
        <CustomSVG
          paths={about.icon.paths}
          width={about.icon.width}
          height={about.icon.height}
          className="fill-[#00D6D6] md:w-[36px] md:h-[36px]"
        />
      </div>
      <h1 className="text-base font-medium md:text-[12px]">{about.name}</h1>
    </div>
  );
};
