"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import ProgressBar from "next-nprogress-bar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <head>
        <title>benirabbany</title>
        <meta name="description" content="Kusindra Aji Rabbany." />
        <link rel="manifest" href="manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <ProgressBar
          height="4px"
          color="#48CAE4"
          options={{ showSpinner: false }}
          shallowRouting
          appDirectory
        />
      </body>
    </html>
  );
}
