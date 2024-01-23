"use client";

export const AboutPage = () => {
  return (
    <div className="w-full max-w-[1440px] m-auto relative isolate overflow-hidden py-24 sm:py-12">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff5955] to-[#a0abc1] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff5955] to-[#a0abc1] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto max-w-[90%] lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-black sm:text-6xl sm:text-[20px]">
            Dr.Noorlan
          </h3>
          <p className="mt-6 text-lg leading-8 text-black-300 sm:text-[14px]">
            Мы специализируемся в широком спектре стоматологических процедур: от
            рутинной гигиены полости рта и лечения кариеса до сложных
            ортодонтических коррекций и хирургических вмешательств. Наша клиника
            оборудована передовой техникой, что позволяет нам предоставлять
            высокоточные и безопасные процедуры.
          </p>
          <p className="mt-6 text-lg leading-8 text-black-300 sm:text-[14px]">
            Dr.Noorlan - место, где улыбка станет ярче. Доверьте свое улучшение
            здоровью и красоте нашей опытной команде, и мы с радостью сделаем
            вашу улыбку самой лучшей версией себя!
          </p>
        </div>
      </div>
    </div>
  );
};
