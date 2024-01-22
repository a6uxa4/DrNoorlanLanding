import clsx from "clsx";

export const WorkCard = ({ work, id, onClick }: any) => {
  return (
    <div
      onClick={() => onClick(work.id)}
      className={clsx(
        "w-fit font-sans px-2.5 py-1.5 skew-x-[-10deg] text-black rounded-md  cursor-pointer lg:text-[12px] lg:px-2 lg:py-1",
        {
          "bg-[#ff5955] text-white": id === work.id,
          "hover:bg-[#eef9f9] text-black": id !== work.id,
        }
      )}
    >
      {work.name} {work.works.length}
    </div>
  );
};
