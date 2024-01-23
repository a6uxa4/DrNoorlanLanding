"use client";

export const Footer = () => {
  return (
    <div className="h-[200px] bg-[#545454] text-white mt-5">
      <footer className="h-full max-w-[1440px] text-base-content flex items-center justify-between m-auto px-8 py-8">
        <div className="flex flex-col gap-5 h-full">
          <div
            onClick={() => (window.location.href = `https://noorlan.com`)}
            className="text-[22px] flex items-center font-medium text-barber-color title-font cursor-pointer"
          >
            Dr. Noorlan
          </div>
          <p className="text-barber-color max-w-[350px] xs:text-xs xs:max-w-[230px]">
            Адрес: ул. Исанова 41
          </p>
        </div>

        <div
          onClick={() =>
            (window.location.href = `https://dentapp.online/prices`)
          }
          className="text-[16px] flex items-center font-medium text-barber-color title-font cursor-pointer"
        >
          Сайт интегрирован с DentApp
          <br />
          Все права защищены. ©Aksoft
        </div>
      </footer>
    </div>
  );
};
