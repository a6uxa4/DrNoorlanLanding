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
      <div className="w-full flex max-w-[1440px] m-auto mt-[100px] mb-[50px] relative xs:mt-[50px]">
        <div className="w-[350px] rotate-[20deg] animate-pulse ml-[100px] lg:ml-5 lg:w-[300px] md:w-[250px] sm:w-[180px] xs:w-[150px] ms:ml-[10px]">
          <Image src={ToothPhoto} alt="ToothPhoto" />
        </div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] rotate-[-30deg] xl:w-[100px] lg:left-[350px] md:w-[50px] md:left-[280px] sm:left-[190px] sm:w-[30px] xs:left-[160px] ms:left-[150px]"></div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] top-[100px] rotate-[-20deg] xl:w-[100px] lg:left-[350px] md:w-[50px] md:left-[300px] md:top-[80px] sm:top-[50px] sm:left-[215px] sm:w-[30px] xs:left-[190px] ms:left-[180px]"></div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] top-[200px] xl:w-[100px] lg:left-[350px] md:w-[50px] md:left-[300px] md:top-[170px] sm:top-[110px] sm:left-[215px] sm:w-[30px] xs:left-[190px] ms:left-[180px]"></div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] top-[300px] rotate-[20deg] xl:w-[100px] lg:left-[350px] md:w-[50px] md:top-[260px] md:left-[300px] sm:left-[215px] sm:top-[170px] sm:w-[30px] xs:left-[190px] ms:left-[180px]"></div>
        <div className="w-[150px] border border-dashed h-0 border-[#ff5955] absolute left-[500px] top-[400px] rotate-[30deg] xl:w-[100px] lg:left-[350px] md:w-[50px] md:left-[300px] md:top-[350px] sm:left-[190px] sm:top-[220px] sm:w-[30px] xs:left-[160px] xs:top-[210px] ms:left-[150px]"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ ease: "easeOut", delay: 0.2 }}
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[-70px] xl:left-[600px] xl:top-[-50px] lg:left-[450px] md:left-[330px] sm:left-[220px] sm:top-[-30px] sm:rounded-md sm:p-1 xs:left-[200px] xs:px-[2px] xs:py-0 ms:left-[190px]"
        >
          <span className="font-bold text-[20px] xl:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[8px]">
            Зубная боль
          </span>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ ease: "easeOut", delay: 0.3 }}
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[50px] xl:left-[600px] xl:w-[300px] xl:top-[40px] lg:left-[450px] md:left-[355px] md:w-[200px] sm:top-3 sm:w-[170px] sm:rounded-md sm:p-1 sm:left-[250px] xs:w-[110px] xs:p-[2px] xs:left-[225px] xs:px-[2px] xs:py-0 ms:left-[215px]"
        >
          <span className="font-bold text-[20px] xl:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[8px]">
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
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[180px] xl:left-[600px] xl:w-[300px] xl:top-[160px] lg:left-[450px] md:left-[355px] md:top-[140px] md:w-[230px] sm:p-1 sm:rounded-md sm:w-[190px] sm:left-[250px] sm:top-[80px] xs:left-[225px] xs:w-[125px] xs:px-[2px] xs:py-0 ms:left-[215px]"
        >
          <span className="font-bold text-[20px] xl:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[8px]">
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
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[300px] xl:left-[600px] lg:left-[450px] md:left-[355px] md:top-[250px] sm:top-[150px] sm:left-[250px] sm:rounded-md sm:p-1 xs:px-[2px] xs:py-0 xs:left-[225px] xs:top-[160px] ms:left-[215px]"
        >
          <span className="font-bold text-[20px] xl:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[8px]">
            Режущиеся зубы мудрости
          </span>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ ease: "easeOut", delay: 0.6 }}
          className="hover:-translate-y-1 cursor-pointer px-2 py-2 bg-neutral-50 duration-500 w-fit text-neutral-600  absolute rounded-xl shadow-md left-[670px] top-[420px] xl:left-[600px] xl:top-[410px] lg:left-[450px] md:top-[340px] md:left-[355px] sm:left-[220px] sm:top-[210px] sm:rounded-md sm:p-1 xs:px-[2px] xs:py-0 xs:left-[195px] ms:left-[185px]"
        >
          <span className="font-bold text-[20px] xl:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[8px]">
            Кровоточивость Десен
          </span>
        </motion.div>
      </div>
    </div>
  );
};
