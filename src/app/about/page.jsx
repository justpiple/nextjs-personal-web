"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname();
  return (
    <main className="p-12 pt-6 overflow-hidden">
      <Navbar pathname={pathname} />
      <section className="mt-28 px-20 mx-auto text-center">
        <h1
          className="font-bold text-3xl text-whiteTheme mb-8"
          data-aos="fade-up"
        >
          About me
        </h1>
        <div className="w-full h-full flex p-8 gap-8 box" data-aos="fade-up">
          <div className="text-center grid gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/83589651"
              alt="Ben's photo"
              className="rounded-md imgBorder"
            />
          </div>
          <div className="basis-[60%]">
            <p
              className="text-whiteTheme/80 text-left inline-block py-8"
              data-aos="fade-left"
              data-aos-duration="550"
            >
              Hello! My name is{" "}
              <span className="text-secondary/90">Kusindra Aji Rabbany</span>,
              also known as <span className="text-secondary/90">Ben</span>. I
              enjoy learning technologies to stay up-to-date. I am currently a
              student at SMK Telkom Malang, specializing in Software
              Engineering. In my free time I mostly learn programming, some of
              the programming technologies I already have experience with can be
              seen in the skills menu.
            </p>
            <div className="mt-16">
              <a
                href="#"
                className="py-4 px-6 bg-sky-500/80 rounded-sm text-whiteTheme font-semibold hover:bg-sky-500/70 transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
