"use client";

import { DatePicker } from "@/components/UI/CustomDateSchedule";
import {
  useGetFreeTimeAppoinmentQuery,
  usePostAppointmentMutation,
} from "@/services/appoinment.service";
import { useForm } from "react-hook-form";
import { useGetPersonalQuery } from "@/services/personal.service";
import { RECORDTYPEDATA } from "@/utils/constants/appointment.constant";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { appointmentsProps } from "@/common/appointments.common";
import { calculateEndTime } from "@/utils/helpers";
import toast from "react-hot-toast";
import { useSectionInView } from "@/hooks/useSectionInView";

export const AppointmentsPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<appointmentsProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      userId: "",
      phoneNumber: "",
      startDate: "",
      startTime: "",
      endTime: "",
      recordType: "",
    },
  });

  const { ref } = useSectionInView("APPOINTMENTS");

  const { data: PersonaData = [] } = useGetPersonalQuery(14);
  const { data: FreeTimeData = [] } = useGetFreeTimeAppoinmentQuery(
    {
      userID: watch("userId"),
      dataOfAppointment: watch("startDate"),
    },
    {
      skip: !watch("userId") || !watch("startDate"),
    }
  );

  const [handlePost, { isLoading }] = usePostAppointmentMutation();

  const onSubmit = async (data: appointmentsProps) => {
    const storedData = localStorage.getItem("IS_APPOINTMENT");
    const IS_DATA = storedData ? new Date(JSON.parse(storedData)) : false;

    try {
      if (
        !IS_DATA ||
        new Date().getTime() - IS_DATA.getTime() > 5 * 60 * 1000
      ) {
        const loadingToast = toast.loading("Загрузка, подождите пожалуйста");
        const response = await handlePost({
          ...data,
          phoneNumber: data.phoneNumber.slice(1),
        }).unwrap();
        toast.dismiss(loadingToast);
        toast.success(response.message);
        localStorage.setItem("IS_APPOINTMENT", JSON.stringify(new Date()));
        reset();
      } else {
        toast.error("Вы уже записались повторите через 5 минут");
      }
    } catch (error) {
      toast.error(
        (error as Error).message ||
          "Ошибка отправки формы. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  return (
    <div
      ref={ref}
      id="appointments"
      className="w-[100vw] bg-white relative flex justify-center items-start py-10 bg-gold-400 sm:py-5 scroll-mt-24"
    >
      <div className="w-full flex flex-col gap-2 max-w-[1440px]">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
            Онлайн запись на прием
          </h1>
        </div>
        <div className="w-full flex items-center justify-around">
          <div className="w-[35%] h-full flex flex-col gap-5">
            <div className="w-full flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
              >
                <path
                  d="M12.9399 11.9122L9.26463 8.25238C7.74117 6.73537 5.27494 6.73537 3.75149 8.25238C-0.394871 12.3812 -1.21176 18.8034 1.84023 23.654C2.60027 24.8624 3.49938 25.9868 4.51254 26.9957L14.3318 36.7731C15.3449 37.782 16.4738 38.6773 17.6873 39.4344C21.3125 41.6958 26.0866 41.9472 30.2012 39.7236C30.2654 39.7333 30.3308 39.7401 30.3978 39.7401H32.7198C34.1526 39.7401 35.3187 40.9009 35.3187 42.328C35.3187 43.7776 34.1286 45.0021 32.7198 45.0021H26.2199C25.5025 45.0021 24.9205 45.5814 24.9205 46.2961C24.9205 47.0108 25.5025 47.59 26.2199 47.59H32.7195C34.1103 47.59 35.4206 47.0313 36.4087 46.0171C37.3816 45.0186 37.9172 43.7085 37.9172 42.328C37.9172 39.7199 35.9698 37.5576 33.4474 37.2041C34.6632 35.6891 34.5813 33.4621 33.1543 32.0414L29.479 28.3817C27.9589 26.868 25.486 26.868 23.9659 28.3817L20.4483 31.8844L9.42198 20.9047L12.9396 17.402C14.4597 15.8887 14.4597 13.4258 12.9399 11.9122ZM11.1021 15.5723L6.66575 19.9899C6.1585 20.495 6.15816 21.3145 6.66575 21.8199L19.5295 34.6293C20.0368 35.1344 20.8597 35.1344 21.367 34.6293L25.8037 30.2114C26.3103 29.7069 27.1346 29.7069 27.6412 30.2114L31.3168 33.8715C31.8244 34.3769 31.8248 35.1954 31.3168 35.7012C28.0473 38.957 22.8969 39.6306 19.0669 37.2415C18.0193 36.5878 17.0443 35.8144 16.1692 34.9434L6.35037 25.1657C5.47528 24.2946 4.699 23.3238 4.04251 22.2802C1.65378 18.4833 2.30417 13.3534 5.58898 10.0824C6.09691 9.57666 6.91887 9.57666 7.4268 10.0824L11.1021 13.7422C11.609 14.2467 11.609 15.0675 11.1021 15.5723ZM41.6667 17.743C41.6667 19.8834 39.9178 21.6248 37.7684 21.6248H30.5101L25.693 26.4215C25.3215 26.7915 24.7625 26.9024 24.2769 26.7022C23.7913 26.5017 23.4745 26.03 23.4745 25.5067V21.6248H22.1751C20.0256 21.6248 18.2768 19.8834 18.2768 17.743V7.30518C18.2768 5.16477 20.0256 3.42334 22.1751 3.42334H37.7684C39.9178 3.42334 41.6667 5.16477 41.6667 7.30518V17.743ZM39.0678 17.743V7.30518C39.0678 6.59182 38.4851 6.01123 37.7684 6.01123H22.1751C21.4587 6.01123 20.8757 6.59182 20.8757 7.30518V17.743C20.8757 18.4564 21.4587 19.0369 22.1751 19.0369H24.774C25.4917 19.0369 26.0734 19.6162 26.0734 20.3309V22.3827L29.053 19.416C29.2966 19.1731 29.6272 19.0369 29.9717 19.0369H37.7684C38.4851 19.0369 39.0678 18.4564 39.0678 17.743ZM26.071 12.5672C26.071 13.2819 25.4893 13.8612 24.7716 13.8612C24.0539 13.8612 23.4722 13.2819 23.4722 12.5672C23.4722 11.8525 24.0539 11.2733 24.7716 11.2733C25.4893 11.2733 26.071 11.8525 26.071 12.5672ZM31.2688 12.5672C31.2688 13.2819 30.6871 13.8612 29.9694 13.8612C29.2516 13.8612 28.6699 13.2819 28.6699 12.5672C28.6699 11.8525 29.2516 11.2733 29.9694 11.2733C30.6871 11.2733 31.2688 11.8525 31.2688 12.5672ZM36.4665 12.5672C36.4665 13.2819 35.8848 13.8612 35.1671 13.8612C34.4494 13.8612 33.8677 13.2819 33.8677 12.5672C33.8677 11.8525 34.4494 11.2733 35.1671 11.2733C35.8848 11.2733 36.4665 11.8525 36.4665 12.5672Z"
                  fill="#ff5955"
                />
              </svg>
              <p className="w-[350px] text-[18px]">
                Удобно получать консультацию по телефону или через популярные
                месседжеры? Нет проблем!
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <span>Звоните:</span>
              <h1 className="text-[30px]">+996 999 898 868</h1>
            </div>
            <div className="flex flex-col gap-5">
              <span>Пишите:</span>
              <div className="flex gap-5">
                <a
                  href="https://www.instagram.com/dr.noorlan_dental/"
                  className="cursor-pointer"
                  aria-label="Our instagram"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.00084 0C6.55657 0 6.24982 0.0106877 5.28981 0.0543752C4.33167 0.0982502 3.67766 0.249938 3.10541 0.4725C2.51346 0.702375 2.01133 1.00988 1.51108 1.51031C1.01045 2.01056 0.702945 2.51269 0.472317 3.10444C0.24919 3.67687 0.0973134 4.33106 0.054188 5.28881C0.01125 6.24881 0 6.55575 0 9C0 11.4443 0.0108753 11.7501 0.0543757 12.7101C0.0984387 13.6682 0.250128 14.3222 0.472505 14.8944C0.70257 15.4864 1.01007 15.9885 1.51052 16.4888C2.01058 16.9894 2.51271 17.2976 3.10428 17.5275C3.67691 17.7501 4.33111 17.9017 5.28906 17.9456C6.24907 17.9893 6.55563 18 8.99972 18C11.4442 18 11.75 17.9893 12.71 17.9456C13.6681 17.9017 14.3229 17.7501 14.8955 17.5275C15.4873 17.2976 15.9887 16.9894 16.4887 16.4888C16.9894 15.9885 17.2969 15.4864 17.5275 14.8946C17.7487 14.3222 17.9006 13.668 17.9456 12.7102C17.9888 11.7502 18 11.4443 18 9C18 6.55575 17.9888 6.249 17.9456 5.289C17.9006 4.33087 17.7487 3.67687 17.5275 3.10462C17.2969 2.51269 16.9894 2.01056 16.4887 1.51031C15.9881 1.00969 15.4875 0.702188 14.895 0.4725C14.3212 0.249938 13.6668 0.0982502 12.7087 0.0543752C11.7487 0.0106877 11.4431 0 8.99803 0H9.00084ZM8.19346 1.62187C8.43309 1.6215 8.70047 1.62187 9.00084 1.62187C11.4039 1.62187 11.6887 1.6305 12.6376 1.67363C13.5151 1.71375 13.9914 1.86038 14.3086 1.98356C14.7287 2.14669 15.0281 2.34169 15.3429 2.65669C15.6579 2.97169 15.8529 3.27169 16.0164 3.69169C16.1396 4.00856 16.2864 4.48481 16.3264 5.36231C16.3695 6.31106 16.3789 6.59606 16.3789 8.99794C16.3789 11.3998 16.3695 11.6848 16.3264 12.6336C16.2862 13.5111 16.1396 13.9873 16.0164 14.3042C15.8533 14.7242 15.6579 15.0232 15.3429 15.3381C15.0279 15.6531 14.7288 15.8481 14.3086 16.0112C13.9918 16.1349 13.5151 16.2812 12.6376 16.3213C11.6889 16.3644 11.4039 16.3738 9.00084 16.3738C6.59763 16.3738 6.31282 16.3644 5.36406 16.3213C4.48655 16.2808 4.01029 16.1342 3.69285 16.011C3.27285 15.8479 2.97284 15.6529 2.65784 15.3379C2.34284 15.0229 2.14784 14.7236 1.98433 14.3034C1.86114 13.9866 1.71433 13.5103 1.67439 12.6328C1.63127 11.6841 1.62264 11.3991 1.62264 8.99569C1.62264 6.59231 1.63127 6.30881 1.67439 5.36006C1.71452 4.48256 1.86114 4.00631 1.98433 3.68906C2.14746 3.26906 2.34284 2.96906 2.65784 2.65406C2.97284 2.33906 3.27285 2.14406 3.69285 1.98056C4.0101 1.85681 4.48655 1.71056 5.36406 1.67025C6.19432 1.63275 6.51607 1.6215 8.19346 1.61962V1.62187ZM13.805 3.11625C13.2088 3.11625 12.725 3.59944 12.725 4.19587C12.725 4.79212 13.2088 5.27588 13.805 5.27588C14.4013 5.27588 14.885 4.79212 14.885 4.19587C14.885 3.59962 14.4013 3.11587 13.805 3.11587V3.11625ZM9.00084 4.37812C6.44838 4.37812 4.37892 6.44756 4.37892 9C4.37892 11.5524 6.44838 13.6209 9.00084 13.6209C11.5533 13.6209 13.622 11.5524 13.622 9C13.622 6.44756 11.5531 4.37812 9.00066 4.37812H9.00084ZM9.00084 6C10.6576 6 12.0009 7.34306 12.0009 9C12.0009 10.6567 10.6576 12 9.00084 12C7.34389 12 6.00081 10.6567 6.00081 9C6.00081 7.34306 7.34389 6 9.00084 6Z"
                      fill="url(#paint0_radial_4096_122307)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_4096_122307"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12.05 20.5761) rotate(-112.995) scale(21.8433 20.3142)"
                      >
                        <stop stopColor="#FFDD55" />
                        <stop offset="0.1" stopColor="#FFDD55" />
                        <stop offset="0.5" stopColor="#FF543E" />
                        <stop offset="0.75" stopColor="#C837AB" />
                        <stop offset="0.854167" stopColor="#C837AB" />
                        <stop offset="1" stopColor="#4367C9" />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
                <a
                  className="cursor-pointer"
                  href="https://wa.me/+996999898868"
                  aria-label="Our whatsapp"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.52374 16.8256L5.82611 17.004C7.09663 17.7546 8.55327 18.1515 10.0387 18.1523H10.0419C14.6039 18.1523 18.3167 14.4573 18.3184 9.91593C18.3191 7.71501 17.4591 5.64574 15.8965 4.08882C14.3337 2.53218 12.256 1.67431 10.0449 1.67339C5.47953 1.67339 1.76668 5.36784 1.76496 9.90919C1.76436 11.4654 2.20169 12.981 3.03031 14.2922L3.22727 14.6039L2.39095 17.6432L5.52374 16.8256ZM0.000244141 19.9975L1.41294 14.8627C0.541572 13.3599 0.0831701 11.6551 0.0838877 9.90873C0.0860118 4.44506 4.5528 0 10.0421 0C12.7058 0.00114291 15.206 1.03307 17.0861 2.90613C18.966 4.77916 20.001 7.2689 20.0001 9.91673C19.9978 15.3801 15.53 19.826 10.0421 19.826C10.0417 19.826 10.0423 19.826 10.0421 19.826H10.0379C8.37134 19.8255 6.73378 19.4093 5.27935 18.6197L0.000244141 19.9975Z"
                      fill="white"
                    />
                    <path
                      d="M0.426792 9.91348C0.426189 11.5992 0.86869 13.2451 1.71009 14.696L0.346191 19.6531L5.44229 18.3229C6.84637 19.0845 8.42721 19.4866 10.0361 19.4871H10.0402C15.3384 19.4871 19.6509 15.1955 19.6532 9.92099C19.6542 7.36485 18.6551 4.96163 16.84 3.15327C15.0252 1.34516 12.6117 0.348856 10.0398 0.347656C4.74133 0.347656 0.428849 4.6387 0.426552 9.91351L0.426792 9.91348ZM10.0401 19.4871H10.0402H10.0401C10.04 19.4871 10.0399 19.4871 10.0401 19.4871Z"
                      fill="url(#paint0_linear_4096_122337)"
                    />
                    <path
                      d="M0.0836435 9.91099C0.0830408 11.6573 0.541443 13.3623 1.41281 14.8649L0 19.9994L5.27894 18.6216C6.73346 19.4112 8.37093 19.8273 10.0375 19.828H10.0417C15.5296 19.828 19.9974 15.3821 19.9997 9.91868C20.0006 7.27071 18.9656 4.78102 17.0857 2.90808C15.2055 1.03514 12.7055 0.00309603 10.0417 0.00195312C4.55268 0.00195312 0.0857723 4.44701 0.083476 9.91068L0.0836435 9.91099ZM3.22713 14.606L3.03008 14.2945C2.20145 12.9831 1.76412 11.4675 1.76472 9.91143C1.76653 5.37037 5.4793 1.67563 10.0447 1.67563C12.2555 1.67649 14.3333 2.53444 15.8962 4.09105C17.459 5.64778 18.3189 7.71721 18.3183 9.91788C18.3163 14.4592 14.6034 18.1542 10.0415 18.1542H10.0383C8.55289 18.1534 7.09614 17.7565 5.8257 17.0061L5.52333 16.8276L2.39058 17.6452L3.22713 14.606ZM10.0417 19.828H10.0418H10.0417C10.0416 19.828 10.0415 19.828 10.0417 19.828Z"
                      fill="#F9F9F9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.55352 5.76772C7.3671 5.35524 7.17095 5.34699 6.99365 5.33973C6.84854 5.33359 6.68258 5.33399 6.51682 5.33399C6.35085 5.33399 6.08129 5.39598 5.85336 5.64383C5.62522 5.89169 4.98242 6.49084 4.98242 7.70938C4.98242 8.92803 5.87414 10.1055 5.99837 10.271C6.12282 10.4361 7.71972 13.0167 10.2486 14.0094C12.3504 14.8344 12.7782 14.6703 13.2343 14.629C13.6905 14.5878 14.7065 14.0301 14.9138 13.4517C15.1211 12.8734 15.1211 12.3777 15.059 12.2742C14.9968 12.171 14.8308 12.109 14.582 11.9852C14.3331 11.8613 13.1099 11.2621 12.8819 11.1794C12.6537 11.0969 12.4878 11.0556 12.3219 11.3036C12.156 11.5513 11.6795 12.109 11.5343 12.2742C11.3892 12.4397 11.2439 12.4604 10.9951 12.3365C10.7462 12.2122 9.94487 11.9509 8.99422 11.1073C8.25452 10.4508 7.75519 9.64005 7.60997 9.39206C7.46487 9.1444 7.59448 9.01025 7.71924 8.88676C7.83103 8.77578 7.96814 8.59757 8.09259 8.45302C8.21673 8.30838 8.25815 8.20516 8.34108 8.03995C8.42412 7.87464 8.3826 7.72999 8.32043 7.6061C8.25815 7.48222 7.77462 6.25741 7.55337 5.76765"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4096_122337"
                        x1="9.99978"
                        y1="19.6511"
                        x2="9.99978"
                        y2="0.345628"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#20B038" />
                        <stop offset="1" stopColor="#60D66A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-fit p-5 rounded-tl-[250px] rounded-tr-[120px] rounded-bl-[200px] rounded-br-[200px] bg-[gainsboro]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-fit px-10 py-5 rounded-tl-[100px] rounded-tr-[250px] rounded-bl-[100px] rounded-br-[150px] bg-[#545454] flex flex-col items-center gap-2 transform-[10%]"
            >
              <div className="relative">
                <Input
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  type="string"
                  label="Имя"
                  placeholder="Введите имя"
                  {...register("firstName", {
                    required: "Заполните имя !",
                  })}
                />
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.firstName?.message}
                </span>
              </div>
              <div className="relative">
                <Input
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  type="string"
                  label="Фамилия"
                  placeholder="Введите фамилию"
                  {...register("lastName", {
                    required: "Заполните фамилию !",
                  })}
                />
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.lastName?.message}
                </span>
              </div>
              <div className="relative">
                <Input
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  type="string"
                  label="Номер телефона"
                  defaultValue="+996"
                  {...register("phoneNumber", {
                    required: "Заполните номер телфона !",
                    min: {
                      value: 13,
                      message: "Заполните полностью",
                    },
                    pattern: {
                      value: /^(\+\d{1,4})?\d{9,12}$/,
                      message: "Не допустимый номер",
                    },
                  })}
                  maxLength={13}
                />
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.phoneNumber?.message}
                </span>
              </div>
              <div className="relative">
                <Select
                  label="Доктор"
                  placeholder="Выберите доктора"
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  {...register("userId", {
                    required: "Выберите доктора !",
                  })}
                >
                  {PersonaData.map((animal: any) => (
                    <SelectItem key={animal.id} value={animal.id}>
                      {animal.fullName}
                    </SelectItem>
                  ))}
                </Select>
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.userId?.message}
                </span>
              </div>
              <div className="relative">
                <Select
                  label="Тип лечение"
                  placeholder="Выберите лечение"
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  {...register("recordType", {
                    required: "Выберите тип записи !",
                  })}
                >
                  {RECORDTYPEDATA.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.recordType?.message}
                </span>
              </div>
              <DatePicker
                label="Выберите время"
                scheduleData={FreeTimeData}
                onDate={(e) => setValue("startDate", e)}
                onTime={(e) => {
                  setValue("startTime", e);
                  setValue("endTime", calculateEndTime(watch("startTime"), 30));
                }}
              />
              <Button
                className="max-w-xs bg-white text-[gray] font-semibold"
                radius="sm"
                onClick={handleSubmit(onSubmit)}
                isLoading={isLoading}
              >
                Записаться
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
