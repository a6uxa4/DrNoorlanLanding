"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export const PersonalPage = () => {
  const { ref } = useSectionInView("Врачи");

  return (
    <div ref={ref} id="personals" className="w-full py-10 sm:py-5 scroll-mt-24">
      <div className="py-5 w-full flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
          Наши доктора
        </h1>
      </div>
      <div className="w-full max-w-[100vw] m-auto">

      </div>
    </div>
  );
};
