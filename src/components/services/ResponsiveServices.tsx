import { SERVICES_DATA } from "@/utils/constants/services.constant";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import CustomSVG from "../UI/CustomSvg/CustomSvg";
import Image from "next/image";

export const ResponsiveServices = () => {
  return (
    <div className="w-full !min-w-[100vw] !max-w-[100vw] hidden lg:block !px-2">
      <Accordion
        itemClasses={{
          title: "sm:text-[14px]",
        }}
        selectionMode="multiple"
      >
        {SERVICES_DATA.map((item) => (
          <AccordionItem
            key={item.id}
            startContent={
              <CustomSVG
                paths={item.icon.paths}
                width={item.icon.width}
                height={item.icon.height}
                viewBox={item.icon.viewBox}
                className="fill-black group-hover:fill-white sm:w-[30px]"
              />
            }
            title={item.name}
          >
            <div className="flex flex-col gap-3 sm:gap-1">
              {item.subServices.map((subItem, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between border-b py-2"
                >
                  <div className="w-full flex items-center justify-start gap-2">
                    <div className="min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] flex items-center justify-center sm:max-w-[40px] sm:max-h-[40px] sm:min-w-[40px] sm:min-h-[40px]">
                      <Image
                        src={subItem.photo}
                        alt="subIcon"
                        className="w-full h-full rounded-full min-w-[50px] min-h-[50px] sm:max-w-[40px] sm:max-h-[40px] sm:min-w-[40px] sm:min-h-[40px]"
                      />
                    </div>
                    <div className="text-[14px] sm:text-[12px] sm:max-w-[80%] xs:max-w-[50%]">
                      {subItem.name}
                    </div>
                  </div>
                  <button
                    style={{ transform: "skew(-14deg)" }}
                    className="bg-[#01e0de] px-[15px] rounded-md text-white py-[5px] text-[12px] sm:text-[10px] font-semibold cursor-pointer  hover:bg-[#14918f]"
                  >
                    Подробнее
                  </button>
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
