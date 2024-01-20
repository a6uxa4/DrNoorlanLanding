import { NextUIProvider } from "@/providers/NextUI";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "swiper/css";
import "react-vertical-timeline-component/style.min.css";
import ActiveSectionContextProvider from "@/providers/ActiveSection";
import Natification from "@/components/UI/Notification";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ActiveSectionContextProvider>
          <Natification>
            <Head>
              <title>Dr Noorlan - современная стоматология в Бишкеке</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta
                name="description"
                content="Стоматологическая клиника Dr Noorlan предлагает все виды 
                стоматологических услуг - лечение, протезирование, имплантация и др. 
                Квалифицированные врачи, современное оборудование, гарантия качества. 
                Запишитесь на прием онлайн"
              />
              <meta
                name="keywords"
                content="Dr Noorlan Бишкек, стоматолог Бишкек,
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
              <meta name="author" content="Aksoft" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
          </Natification>
        </ActiveSectionContextProvider>
      </NextUIProvider>
    </Provider>
  );
}
