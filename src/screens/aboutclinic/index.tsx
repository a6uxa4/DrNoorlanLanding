"use client";

import Image from "next/image";
import ToothPhoto from "../../assets/images/ToothPhoto.jpeg";
import { motion } from "framer-motion";

export const AboutClinicPage = () => {
  return (
    <div className="w-full py-20 sm:py-5">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          <span className="text-[40px] lg:text-[30px] sm:text-[20px] text-[#ff5955]">
            5
          </span>{" "}
          Причин посетить нашу клинику
        </h1>
      </div>
      <div className="w-full flex max-w-[1440px] m-auto mt-[100px] relative">
        <div className="w-[350px] rotate-[20deg] animate-pulse ml-[100px]">
          <Image src={ToothPhoto} alt="ToothPhoto" />
        </div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] rotate-[-30deg]"></div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] top-[100px] rotate-[-20deg]"></div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] top-[200px]"></div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] top-[300px] rotate-[20deg]"></div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] top-[400px] rotate-[30deg]"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ ease: "easeOut", delay: 0.2 }}
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[-70px]"
        >
          <span className="font-bold text-[20px]">Зубная боль</span>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ ease: "easeOut", delay: 0.3 }}
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[50px]"
        >
          <span className="font-bold text-[20px]">
            Разрушение или потеря/отсутствие зуба
          </span>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ ease: "easeOut", delay: 0.4 }}
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[180px]"
        >
          <span className="font-bold text-[20px]">
            Появление налета, который остается после чистки зубов
          </span>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ ease: "easeOut", delay: 0.5 }}
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[300px]"
        >
          <span className="font-bold text-[20px]">Режущиеся зубы мудрости</span>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ ease: "easeOut", delay: 0.6 }}
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[420px]"
        >
          <span className="font-bold text-[20px]">Кровоточивость Десен</span>
        </motion.div>
      </div>
    </div>
  );
};
