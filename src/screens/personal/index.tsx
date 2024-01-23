"use client";

import ContainerSlider from "@/components/UI/Containerslider";
import { PersonalCard } from "@/components/personal/PersonalCard";
import { useSectionInView } from "@/hooks/useSectionInView";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useGetPersonalWithAvatarQuery } from "@/services/personal.service";
import { Card, Skeleton } from "@nextui-org/react";
import { SwiperSlide } from "swiper/react";

export const PersonalPage = () => {
  const { ref } = useSectionInView("Врачи");
  const windowWidth = useWindowWidth();

  const { data: PersonalData = [], isLoading } = useGetPersonalWithAvatarQuery(
    process.env.CLINIC_ID
  );

  return (
    <div
      ref={ref}
      id="personals"
      className="w-full py-10 sm:py-5 scroll-mt-24 bg-[#fafafa]"
    >
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          Наши доктора
        </h1>
      </div>
      <div className="w-full max-w-[100vw] m-auto hidden xl:items-center gap-5 xl:justify-center xl:block">
        <ContainerSlider cardWidth={300}>
          {isLoading
            ? Array.from(
                { length: Math.floor(windowWidth / 300) },
                (_, index) => index + 1
              ).map((item) => (
                <SwiperSlide
                  key={item}
                  className="w-full my-[20px] !flex !items-center !justify-center"
                >
                  <Card
                    className="w-[300px] h-[350px] min-w-[300px] max-w-[300px] min-h-[350px] max-h-[350px] md:max-w-[250px] md:min-w-[250px] md:min-h-[350px] md:max-h-[350px] md:w-[250px] md:h-[350px] space-y-5 p-4"
                    radius="lg"
                  >
                    <Skeleton className="rounded-lg">
                      <div className="h-52 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </Card>
                </SwiperSlide>
              ))
            : PersonalData.map((item: any) => (
                <SwiperSlide
                  key={item.id}
                  className="w-full mt-[50px] !flex !items-center !justify-center"
                >
                  <PersonalCard personal={item} />
                </SwiperSlide>
              ))}
        </ContainerSlider>
      </div>
      <div className="w-full items-center justify-center max-w-[1440px] m-auto flex gap-5 mt-[70px] xl:hidden">
        {isLoading ? (
          [1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className="w-[300px] h-[360px] min-w-[300px] max-w-[300px] min-h-[360px] max-h-[360px] md:max-w-[250px] md:min-w-[250px] md:min-h-[350px] md:max-h-[350px] md:w-[250px] md:h-[350px] space-y-5 p-4"
              radius="lg"
            >
              <Skeleton className="rounded-lg">
                <div className="h-52 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          ))
        ) : PersonalData.length <= 4 ? (
          PersonalData.map((item: any) => (
            <PersonalCard key={item.id} personal={item} />
          ))
        ) : (
          <ContainerSlider cardWidth={300}>
            {PersonalData.map((item: any) => (
              <SwiperSlide
                key={item.id}
                className="w-full mt-[50px] !flex !items-center !justify-center"
              >
                <PersonalCard personal={item} />
              </SwiperSlide>
            ))}
          </ContainerSlider>
        )}
      </div>
    </div>
  );
};
