export const generateObject = (
  array: { [key: string]: any }[],
  id: number | null,
  key: string
) => {
  const filteredData = array.flatMap((item: any) =>
    item[key].filter((el: any) => el.id === id)
  );

  const resultObject = Object.assign({}, ...filteredData);
  return resultObject;
};

export function calculateEndTime(
  startTime: string,
  fullDuration: number
): string {
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  let hours = Math.floor(fullDuration / 60);
  let minutes = fullDuration % 60;
  let endHours = startHours + hours;
  let endMinutes = startMinutes + minutes;
  if (endMinutes >= 60) {
    endMinutes -= 60;
    endHours++;
  }
  const formattedEndHours = endHours.toString().padStart(2, "0");
  const formattedEndMinutes = endMinutes.toString().padStart(2, "0");
  const endTime = `${formattedEndHours}:${formattedEndMinutes}:00`;
  return endTime;
}

export const translateSpecality = (speciality: string) => {
  switch (speciality) {
    case null:
      return "Стомотолог";
    case "THERAPIST":
      return "Терапевт";
    case "HYGIENIST":
      return "Гигиенист";
    case "ORTHOPEDIST":
      return "Ортопед";
    case "SURGEON":
      return "Хирург";
    case "DENTIST":
      return "Стоматолог";
    case "IMPANTOLOGIST":
      return "Имплантолог";
    case "PARODONTOLOG":
      return "Пародонтолог";
    case "PEDIATRIC_DENTIST":
      return "Детский стоматолог";
    default:
      break;
  }
};
