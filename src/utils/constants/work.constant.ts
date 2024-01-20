import WCBTeeth1 from "../../assets/images/WCBTeeth1.jpeg";
import WCATeeth1 from "../../assets/images/WCATeeth1.jpeg";
import WCBTeeth2 from "../../assets/images/WCBTeeth2.jpeg";
import WCATeeth2 from "../../assets/images/WCATeeth2.jpeg";

import WWBTeeth1 from "../../assets/images/WWBTeeth1.jpeg";
import WWATeeth1 from "../../assets/images/WWATeeth1.jpeg";
import WWBTeeth2 from "../../assets/images/WWBTeeth2.jpeg";
import WWATeeth2 from "../../assets/images/WWATeeth2.jpeg";

import WVBTeeth1 from "../../assets/images/WVBTeeth1.jpeg";
import WVATeeth1 from "../../assets/images/WVATeeth1.jpeg";
import WVBTeeth2 from "../../assets/images/WVBTeeth2.jpeg";
import WVATeeth2 from "../../assets/images/WVATeeth2.jpeg";

export const WORK_DATA = [
  {
    id: 1,
    name: "Чистка зубов",
    works: [
      {
        beforeImage: WCBTeeth1,
        afterImage: WCATeeth1,
      },
      {
        beforeImage: WCBTeeth2,
        afterImage: WCATeeth2,
      },
    ],
  },
  {
    id: 2,
    name: "Отбеливание зубов",
    works: [
      {
        beforeImage: WWBTeeth1,
        afterImage: WWATeeth1,
      },
      {
        beforeImage: WWBTeeth2,
        afterImage: WWATeeth2,
      },
    ],
  },
  {
    id: 3,
    name: "Виниры",
    works: [
      {
        beforeImage: WVBTeeth1,
        afterImage: WVATeeth1,
      },
      {
        beforeImage: WVBTeeth2,
        afterImage: WVATeeth2,
      },
    ],
  },
  {
    id: 4,
    name: "Имплантация зубов",
    works: [],
  },
  {
    id: 5,
    name: "Лечение брекет-системой",
    works: [],
  },
  {
    id: 6,
    name: "Лечение зубов",
    works: [],
  },
  {
    id: 7,
    name: "Лечение кариеса",
    works: [],
  },
  {
    id: 8,
    name: "Протезирование зубов",
    works: [],
  },
  {
    id: 9,
    name: "Лечение дёсен",
    works: [],
  },
  {
    id: 10,
    name: "Реставрация зубов",
    works: [],
  },
] as const;
