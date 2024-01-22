"use client";

import { NextPage } from "next";
import Image from "next/image";
import { withLayout } from "@/Layout";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <div className="w-[100vw] h-full flex lg:flex-col lg:items-center lg:mb-14">
      <Head>
        <title>Dr Noorlan - О нас</title>
      </Head>
      <div className="w-[50%] h-full flex flex-col gap-10 p-10 lg:w-full md:text-[14px] md:gap-5">
        <span>
          Dr Noorlan - это современная стоматологическая клиника, предлагающая
          высококачественные услуги в уютной и спокойной обстановке.
        </span>
        <span>
          В нашей клинике Вы сможете сделать панорамный снимок зубов на новейшем
          оборудовании Vatech 2023 года. Что гарантирует качественный снимок и
          дальнейшее лечение
        </span>
        <span>
          Мы специализируемся в широком спектре стоматологических процедур: от
          рутинной гигиены полости рта и лечения кариеса до сложных
          ортодонтических коррекций и хирургических вмешательств. Наша клиника
          оборудована передовой техникой, что позволяет нам предоставлять
          высокоточные и безопасные процедуры.
        </span>
        <span>
          Мы гордимся тем, что наш подход к каждому пациенту индивидуален и
          интегрирует их пожелания и потребности. Мы стремимся создать уютную и
          доверительную атмосферу.
        </span>
        <span>
          Dr Noorlan - место, где улыбка станет ярче. Доверьте свое улучшение
          здоровью и красоте нашей опытной команде, и мы с радостью сделаем вашу
          улыбку самой лучшей версией себя!
        </span>
      </div>
      {/* <div className="w-[50%] h-full flex items-center justify-center lg:w-full lg:p-10">
        <Image
          className="w-[500px] h-[500px] rounded-[24px] lg:w-full md:h-[300px]"
          src={PhotoAbout}
          alt="about"
        />
      </div> */}
    </div>
  );
};
export default withLayout(AboutPage);
