"use client";

import Navbar from "@/components/Navbar";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <main className="p-12 pt-6 overflow-hidden">
      <Navbar pathname={pathname} />
      <section className="my-40 pl-36">
        <div className="grid gap-2">
          <span
            className="text-secondary"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            Hi, I am
          </span>
          <h1
            className="text-whiteTheme/95 text-7xl font-semibold"
            data-aos="zoom-out"
            data-aos-duration="700"
          >
            Kusindra Aji R.
          </h1>
          <h2
            className="text-whiteTheme/80 text-4xl font-semibold"
            data-aos="fade-right"
          >
            Technology Enthusiast
          </h2>
          <span
            className="text-whiteTheme/80 xs:pr-0 sm:pr-44 md:pr-72 xl:pr-[590px]"
            data-aos="fade-left"
          >
            I am a junior software engineer. I like to learn about technology
            and programming. Interested? Let's connect with me
          </span>
        </div>
      </section>
      <div
        className="bottom-0 left-12 fixed grid gap-3"
        data-aos="fade-up"
        data-aos-duration="550"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="group flex gap-4">
            <a
              href="https://l.benspace.xyz/gh"
              className="text-whiteTheme hover:text-secondary transition-all"
              target="_blank"
            >
              <FaGithub size="24px" />
            </a>
          </div>
          <div className="h-16 w-px bg-whiteTheme"></div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="group flex gap-4">
            <a
              href="https://l.benspace.xyz/contact-wa"
              className="text-whiteTheme hover:text-secondary transition-all"
              target="_blank"
            >
              <FaWhatsapp size="24px" />
            </a>
          </div>
          <div className="h-16 w-px bg-whiteTheme"></div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="group flex gap-4">
            <a
              href="https://l.benspace.xyz/contact-ig"
              className="text-whiteTheme hover:text-secondary transition-all"
              target="_blank"
            >
              <FaInstagram size="24px" />
            </a>
          </div>
          <div className="h-16 w-px bg-whiteTheme"></div>
        </div>
      </div>
      <div className="bottom-0 right-12 fixed grid gap-3" data-aos="fade-up">
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:work@benspace.xyz"
            className="text-whiteTheme hover:text-secondary [writing-mode:vertical-lr] text-lg tracking-[.20em] transition-all"
          >
            work@benspace.xyz
          </a>
          <div className="h-16 w-px bg-whiteTheme"></div>
        </div>
      </div>
    </main>
  );
}
