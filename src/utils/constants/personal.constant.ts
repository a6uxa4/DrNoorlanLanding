import ManPersonal from "../../assets/images/ManPersonal.png";
import WomenPersonal from "../../assets/images/WomenPersonal.png";
import ManPersonalTwo from "../../assets/images/ManPersonalTwo.png";

export const PERSONALS = [
  {
    id: 1,
    firstName: "Норполов",
    lastName: "Баир Александрович",
    photo: ManPersonal,
    specialization:
      "Главный врач, Cтоматолог-имплантолог, Cтоматолог-ортопед, Врач-стоматолог-терапевт, Врач-стоматолог-хирург, Стоматолог-пародонтолог, Стоматолог-хирург",
  },
  {
    id: 2,
    firstName: "Даширабданова",
    lastName: "Уржина Цыбенжаповна",
    photo: WomenPersonal,
    specialization: "Стоматолог-ортодонт",
  },
  {
    id: 3,
    firstName: "Бабушкин",
    lastName: "Александр Юрьевич",
    photo: ManPersonalTwo,
    specialization:
      "Стоматолог-имплантолог, Стоматолог-хирург, Стоматолог-ортопед",
  },
  {
    id: 4,
    firstName: "Даширабданова",
    lastName: "Уржина Цыбенжаповна",
    photo: WomenPersonal,
    specialization:
      "Стоматолог-ортодонт, Cтоматолог-имплантолог, Врач-стоматолог-терапевт",
  },
] as const;
