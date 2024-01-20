"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { MiniCalendar } from "../mini-calendar";
import { format } from "date-fns";
import clsx from "clsx";

export const DatePicker = ({
  label,
  scheduleData,
  onDate,
  onTime,
}: {
  label: string;
  scheduleData: { startTime: string; endTime: string }[];
  onDate: (e: string) => void;
  onTime: (e: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newDate, setNewDate] = useState(new Date());
  const [value, setValue] = useState({
    time: "",
    date: "",
  });

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    onDate(format(newDate, "yyyy-MM-dd"));
    setValue({ ...value, date: format(newDate, "yyyy-MM-dd") });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChangeDate(date: Date) {
    setNewDate(date);
    onDate(format(date, "yyyy-MM-dd"));
    setValue({ ...value, date: format(date, "yyyy-MM-dd") });
  }

  function handleChangeTime(time: string) {
    onTime(time);
    setValue({ ...value, time: time });
    setIsOpen(false);
  }

  return (
    <Popover placement="bottom" onOpenChange={togglePopover} isOpen={isOpen}>
      <PopoverTrigger>
        <div className="group bg-[#f4f4f5] w-full max-w-xs flex flex-col px-3 py-2 rounded-xl items-start relative cursor-pointer hover:bg-[gainsboro]">
          <label
            htmlFor="FieldDate"
            className="text-[12px] text-[#52525B] font-sans leading-5 pr-[8px]"
          >
            {label}
          </label>
          <input
            id="FieldDate"
            className="w-full max-w-[90%] outline-none text-[14px] bg-[#f4f4f5] group-hover:bg-[gainsboro]"
            readOnly
            placeholder="ГГГГ-ММ-ДД ~ ЧЧ-MM-СС"
            value={`${value.date} ~ ${value.time}`}
          />
          <svg
            fill="none"
            width="1em"
            height="1em"
            role="presentation"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            data-slot="selectorIcon"
            className={clsx(
              "absolute right-3 top-[40%] transition-transform duration-150",
              {
                "rotate-180": isOpen,
              }
            )}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-full h-full flex">
          <MiniCalendar
            newDate={newDate}
            setNewDate={(e) => handleChangeDate(e)}
          />
          <ScrollShadow
            className={clsx(
              "w-[120px] h-[260px] flex flex-col gap-2 border-l pl-2 py-5 items-center justify-center",
              {
                "!justify-start": scheduleData.length,
              }
            )}
          >
            {scheduleData.length ? (
              scheduleData.map((item: any) => (
                <span
                  onClick={() => handleChangeTime(item.startTime)}
                  key={item.startTime}
                  className="bg-[#eff8f9] px-2 py-1 rounded-md w-full flex items-center justify-center hover:bg-[#00d6d4] hover:text-white cursor-pointer"
                >
                  {item.startTime}
                </span>
              ))
            ) : (
              <span className="text-center">Свободного времени нет !</span>
            )}
          </ScrollShadow>
        </div>
      </PopoverContent>
    </Popover>
  );
};
