import { FC, FunctionComponent, PropsWithChildren } from "react";
import { Header } from "../screens/header";
import { Inter } from "next/font/google";
import { Footer } from "@/screens/footer";

interface IProps extends PropsWithChildren {}

const inter = Inter({ subsets: ["latin"] });

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={`w-full h-full min-h-[calc(100vh_-_100px)] m-auto grid place-content-center pt-[70px] ${inter.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
