import { Accordion, AccordionItem } from "@nextui-org/react";
import CustomSVG from "../UI/CustomSvg/CustomSvg";
import Image from "next/image";
import { WORK_DATA } from "@/utils/constants/work.constant";

export const ResponsiveWork = () => {
  return (
    <div className="w-full !min-w-[100vw] !max-w-[100vw] hidden lg:block !px-2">
      <Accordion
        itemClasses={{
          title: "sm:text-[14px]",
        }}
        selectionMode="multiple"
      >
        {WORK_DATA.map((item) => (
          <AccordionItem
            key={item.id}
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z"
                  stroke="#2F302C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title={`${item.name} ${item.works.length}`}
          >
            <div className="flex flex-col gap-3 sm:gap-1">
              {item.works.map((subItem, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between border-b py-2"
                >
                  <div className="flex gap-5 xs:gap-1 items-center">
                    <Image src={subItem.beforeImage} alt="beforeImage" />
                    <div>
                      <svg
                        fill="#00d6d4"
                        viewBox="0 0 24 24"
                        height="40px"
                        width="40px"
                        className="xs:w-[30px] xs:h-[30px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
                      </svg>
                    </div>
                    <Image src={subItem.afterImage} alt="afterImage" />
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
