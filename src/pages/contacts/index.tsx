"use client";

import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import clsx from "clsx";
import { useRouter } from "next/router";
import { withLayout } from "@/Layout";
import Head from "next/head";

const ContactsPage: NextPage = () => {
  const route = useRouter();

  return (
    <div className="container flex flex-col gap-4">
      <Head>
        <title>Dr Noorlan - Контакты</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Dental Dr Noorlan Бишкек предлагает все виды 
                стоматологических услуг - лечение, протезирование, имплантация и др. 
                Квалифицированные врачи, современное оборудование, гарантия качества. 
                Запишитесь на прием онлайн"
        />
        <meta
          name="keywords"
          content="Эстетик Клиник Бишкек,
                эстетик клиник, клиника эстетик,veneers clinic,
                dental clinic, эстетик клиник бишкек
                стоматология Бишкек, стоматология Кыргызстан
                стоматология цены Бишкек
                лечение зубов Бишкек
                протезирование зубов Бишкек
                имплантация зубов Бишкек
                безболезненное лечение зубов
                современное стоматологическое оборудование
                высококвалифицированные стоматологи"
        />
        <meta name="author" content="AkSoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex gap-4 px-10 py-10 xl:flex-col xl:items-center">
        <div className="w-1/2 shadow-xl p-3 px-4 flex flex-col gap-2 md:w-full">
          <p className="text-xl">Dr. Noorlan Бишкек</p>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500">Адрес:</span>
            <p className=" flex flex-col gap-1">
              <span className="!text-md">
                Исанова 42, помещение 11, 2 этаж{" "}
              </span>
              <span className="text-gray-500 text-sm">
                Добро пожаловать в стоматологическую клинику Dr.Noorlan, где мы
                предоставляем полный спектр стоматологических услуг: от лечения
                и протезирования до имплантации и многого другого. Наши
                квалифицированные врачи, снабженные современным оборудованием,
                гарантируют высокое качество лечения. Запишитесь на прием онлайн
                и доверьте заботу о вашей улыбке нам.
              </span>
            </p>
          </div>
          <br />
          <div className="flex flex-col">
            <span className="text-gray-500">Телефон:</span>
            <a
              href="tel:+996999898868"
              className="flex items-center gap-2 underline text-[#00d6d4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#00d6d4"
                  fillRule="evenodd"
                  d="M4.458 2.047a.161.161 0 00-.228 0L2.839 3.438a2.863 2.863 0 00-.582 3.21 18.316 18.316 0 009.095 9.095 2.863 2.863 0 003.21-.582l1.39-1.39a.161.161 0 000-.229l-1.87-1.871a.16.16 0 00-.187-.03l-1.038.519a3.322 3.322 0 01-3.835-.623l-2.56-2.559a3.322 3.322 0 01-.622-3.835l.52-1.038a.161.161 0 00-.03-.186L4.457 2.047zM2.816.633a2.161 2.161 0 013.056 0l1.871 1.871c.658.658.821 1.663.405 2.495L7.63 6.038a1.322 1.322 0 00.248 1.526l2.559 2.56a1.322 1.322 0 001.526.247l1.039-.52a2.161 2.161 0 012.495.405l1.871 1.872a2.161 2.161 0 010 3.056l-1.391 1.392a4.863 4.863 0 01-5.452.988A20.317 20.317 0 01.437 7.475a4.863 4.863 0 01.989-5.45L2.815.632z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>+996 (999) 89-88-68</span>
            </a>
          </div>
          <br />
          <div className="flex flex-col">
            <span className="text-gray-500">Instagram:</span>
            <a
              href="https://www.instagram.com/dr.noorlan/"
              className="flex items-center gap-2 underline text-[#00d6d4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#00d6d4"
                  d="M11.78 0H6.22C2.784 0 0 2.784 0 6.22v5.56C0 15.216 2.784 18 6.22 18h5.56C15.216 18 18 15.216 18 11.78v-5.56C18 2.784 15.216 0 11.78 0zm-1.773 2.118c.957 0 1.732.775 1.732 1.732s-.775 1.732-1.732 1.732-1.732-.775-1.732-1.732.775-1.732 1.732-1.732zm4.686 3.713c-.19-.038-1.925-.398-3.843-.398-1.92 0-3.654.36-3.844.398-1.01.207-1.793 1.39-1.825 2.4v3.646c.036 1.01.815 1.82 1.825 1.855.19.038 1.925.398 3.844.398 1.92 0 3.654-.36 3.844-.398 1.01-.035 1.793- .845 1.825-1.855v-3.646c-.036-1.01-.815-1.82-1.825-1.855zm-5.985 1.878a2.997 2.997 0 002.997-2.997 2.997 2.997 0 00-2.997-2.997 2.997 2.997 0 00-2.997 2.997 2.997 2.997 0 002.997 2.997zm4.592 4.977h-9.184c-.453 0-.82-.367-.82-.82v-6.413c0-.453.367-.82.82-.82h9.184c.453 0 .82.367.82.82v6.413c0 .453-.367.82-.82.82z"
                />
              </svg>
              <span>Dr. Noorlan</span>
            </a>

            <br />
          </div>

          <div className="w-fit h-full flex items-center justify-center md:hidden">
            <Button
              onClick={() => {
                route.push("/#appointments");
              }}
              className={clsx(
                "skew-x-[-10deg] bg-[#00d6d4] text-white font-semibold text-[16px]"
              )}
            >
              Записаться на прием
            </Button>
          </div>
        </div>
        <div className="w-full h-[400px] z-10 xl:mb-[100px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.610663521013!2d74.59104218770823!3d42.871793545254896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec95d1e37becd%3A0xc5d706cc565452dd!2zRHIuTm9vckxhbiDQntGB0J7QniAi0KvRgdC80LDQvdCT0YDRg9C_0L8i!5e0!3m2!1sky!2skg!4v1705780294656!5m2!1sky!2skg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default withLayout(ContactsPage);
