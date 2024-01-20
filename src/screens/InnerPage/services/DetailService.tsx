"use client";

import CustomSVG from "@/components/UI/CustomSvg/CustomSvg";
import { ADVANTAGES } from "@/utils/constants/advantages.constant";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";

export const DetailService = ({ serviceData }: any) => {
  return (
    <div>
      <div className="max-w-[1440px] flex flex-col items-start px-20 justify-center m-auto">
        <div className="flex flex-col gap-5 items-start justify-center mt-[100px]">
          <Breadcrumbs size="lg">
            <BreadcrumbItem href="/">Главная</BreadcrumbItem>
            <BreadcrumbItem>{serviceData.name}</BreadcrumbItem>
          </Breadcrumbs>
          <div className="flex gap-5 items-center">
            <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center bg-[#d7f4f4]">
              <Image src={serviceData.icon} alt="serviceIcon" />
            </div>
            <h1 className="text-[30px]">{serviceData.name}</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] bg-[#01d6d7] mt-[100px]">
        <div className="w-full h-full max-w-[1440px] relative m-auto flex items-center justify-between">
          <div className="w-[400px] h-[400px] bg-white rounded-full flex items-center justify-center absolute top-[-70%] right-40">
            <Image
              src={serviceData.photo}
              alt="serviceIcon"
              className="rounded-full"
              width={350}
              height={350}
            />
          </div>
          <div className="w-full h-full grid grid-rows-2 grid-flow-col max-w-[65%] items-center justify-end pt-16">
            {ADVANTAGES.map((advantages) => (
              <div
                key={advantages.id}
                className={clsx(
                  "w-[180px] bg-red-00 min-w-[180px] h-fit flex flex-col justify-around gap-1 py-6 text-center relative items-center rounded cursor-pointer",
                  {
                    "col-span-2 row-span-2":
                      advantages.id === 4 || advantages.id === 2,
                  }
                )}
              >
                <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center bg-[white]">
                  <CustomSVG
                    paths={advantages.icon.paths}
                    width={advantages.icon.width}
                    height={advantages.icon.height}
                    className={clsx("fill-[#01d6d7]")}
                  />
                </div>
                <div className="mt-1 text-[#00d6d6] bg-white rounded-2xl">
                  {advantages.name}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full max-w-[30%] h-full flex justify-start items-center">
            <Button
              className={clsx(
                "skew-x-[-10deg] bg-white text-[#00d6d6] font-semibold text-[26px] py-[30px]"
              )}
            >
              Записаться на прием
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
