import Rating from "../UI/Rating/Rating";
import Image from "next/image";
import { LOGOS } from "@/utils/constants/feedback.constant";
import clsx from "clsx";

export const FeedbackCard = ({ feedback }: any) => {
  return (
    <div className="h-[350px] w-[650px] bg-white shadow-lg mx-10 rounded-xl relative cursor-pointer lg:w-[550px] lg:h-[250px] sm:w-[500px] sm:h-[200px] sm:mx-5 xs:w-[300px] xs:h-[150px] xs:mx-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fde046"
        width="45px"
        height="45px"
        viewBox="0 0 64 64"
        className="absolute left-[50px] top-[-25px] xs:left-[20px]"
        version="1.1"
      >
        <path d="M27.194,12l0,8.025c-2.537,0.14 -4.458,0.603 -5.761,1.39c-1.304,0.787 -2.22,2.063 -2.749,3.829c-0.528,1.766 -0.793,4.292 -0.793,7.579l9.303,0l0,19.145l-19.081,0l0,-18.201c0,-7.518 1.612,-13.025 4.836,-16.522c3.225,-3.497 7.973,-5.245 14.245,-5.245Zm28.806,0l0,8.025c-2.537,0.14 -4.457,0.586 -5.761,1.338c-1.304,0.751 -2.247,2.028 -2.828,3.829c-0.581,1.8 -0.872,4.344 -0.872,7.631l9.461,0l0,19.145l-19.186,0l0,-18.201c0,-7.518 1.603,-13.025 4.809,-16.522c3.207,-3.497 7.999,-5.245 14.377,-5.245Z" />
      </svg>
      <div className="flex justify-between mx-[50px] xs:mx-3">
        <div className="flex items-center mt-6">
          <div
            style={{ backgroundColor: feedback.color }}
            className={clsx(
              `rounded-full w-14 h-14 min-w-[56px] min-h-[56px] xs:min-h-[35px] xs:min-w-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center`
            )}
          >
            <p className="text-[18px] text-white font-extrabold tracking-widest xs:text-[10px]">
              {feedback.FullName.split(" ")[0].split("")[0]}
              {feedback.FullName.split(" ")[1].split("")[0]}
            </p>
          </div>
          <div className="ml-4">
            <p className="text-[15px] text-gray-800 tracking-wider xs:text-[10px]">
              {feedback.FullName}
            </p>
            <p className="text-[13px] text-gray-600 xs:text-[10px]">
              {feedback.date}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-fit mt-6 xs:hidden">
          <Rating rating={5} />
        </div>
        <div className="w-32 h-16 mt-4 p-5 xs:w-20 xs:h-14">
          <Image src={LOGOS[feedback.number]} alt="Logo" />
        </div>
      </div>
      <h1 className="text-gray-700 text-[14px] px-[50px] mt-4 tracking-wide lg:px-[30px] overflow-hidden text-ellipsis max-w-full h-[130px] sm:h-[80px] xs:h-[45px] xs:text-[10px]">
        {feedback.title}
      </h1>
    </div>
  );
};
