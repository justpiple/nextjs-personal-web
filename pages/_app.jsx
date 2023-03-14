import "../styles/global.css";
import NextNProgress from "nextjs-progressbar";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  usePageViews();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GoogleAnalytics />
      <NextNProgress options={{ easing: "ease", speed: 500 }} color="#74f2d8" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
