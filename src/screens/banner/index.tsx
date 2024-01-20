"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import photoBanner from "../../assets/images/noorlanPhoto.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";

export const BannerPage = () => {
  const { ref } = useSectionInView("HOME");

  return (
    <div
      ref={ref}
      id="HOME"
      className="w-[100vw] h-[600px] bg-[#545454] flex items-center justify-center sm:h-[400px]"
    >
      <motion.div
        className="w-full h-full flex items-center justify-center max-w-[1440px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
      >
        <Image
          src={photoBanner}
          alt="icon"
          className="w-full h-full object-cover max-w-[50vw] lg:max-w-[60vw] md:max-w-[70vw] sm:max-w-[80vw] sm:max-h-[200px]"
        />
      </motion.div>
    </div>
  );
};
