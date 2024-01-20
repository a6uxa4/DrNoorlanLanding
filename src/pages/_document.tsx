import { SpeedInsights } from "@vercel/speed-insights/next";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  );
}
