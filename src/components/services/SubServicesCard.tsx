import Image from "next/image";
import { useRouter } from "next/router";

export const SubServicesCard = ({ subService }: any) => {
  const router = useRouter();
  return (
    <div className="relative group w-[180px] h-[250px] max-h-[250px] rounded-lg bg-[#f3fbfb] flex flex-col items-center justify-around px-3 py-3 gap-1 cursor-pointer hover:bg-[#01d6d4] duration-700">
      <div className="w-[120px] h-[120px] min-h-[120px] min-w-[120px] flex items-center justify-center">
        <div className="flex w-full h-full items-center justify-center group-hover:hidden rounded-full">
          <Image src={subService.icon} alt="icon" />
        </div>
        <div className="w-full h-full items-center justify-center hidden group-hover:flex rounded-full">
          <Image
            src={subService.photo}
            alt="photo"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="w-full h-full max-h-[38%] min-h-[38%] text-sm text-center group-hover:text-white">
        {subService.name}
      </div>
      <button
        onClick={() => router.push(`detail-services/${subService.id}`)}
        style={{ transform: "skew(-14deg)" }}
        className="bg-[#01e0de] px-[15px] rounded-md text-white py-[5px] text-[14px] font-semibold cursor-pointer absolute bottom-[-15px] hidden group-hover:block hover:bg-[#14918f]"
      >
        Подробнее
      </button>
    </div>
  );
};
