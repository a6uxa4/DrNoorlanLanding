import { translateSpecality } from "@/utils/helpers";
import Image from "next/image";

export const PersonalCard = ({ personal }: any) => {
  return (
    <div className="group w-[300px] h-[400px] relative flex flex-col items-start justify-between cursor-pointer m-2.5 min-w-[300px] max-w-[300px] min-h-[400px] max-h-[400px] md:max-w-[250px] md:min-w-[250px] md:min-h-[350px] md:max-h-[350px] md:w-[250px] md:h-[350px]">
      <div className="w-full h-full flex items-end justify-center">
        <div className="w-[250px] h-[120px] bg-[gainsboro] group-hover:bg-[#ff5955] duration-500 rounded-xl absolute z-[2]"></div>
        <Image
          src={personal.avatar}
          alt="personal"
          width={240}
          height={190}
          className="z-[9] absolute min-h-[240px] max-h-[240px] min-w-[230px] max-w-[230px] object-cover md:min-h-[190px] md:max-h-[190px] md:max-w-[180px] md:min-w-[180p] rounded-xl"
        />
      </div>
      <div className="w-full h-full flex flex-col items-center mt-2 max-h-[175px] overflow-scroll">
        <div className="text-[16px] md:text-[14px] font-medium">
          {personal.fullName}
        </div>
        <div className="text-[#ff5955] mt-1 md:text-[14px]">
          {translateSpecality(personal.speciality)}
        </div>
      </div>
    </div>
  );
};
