"use client";

import React from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import DownloadDocIcon from "../icons/DownloadDocIcon";
import { useInView } from "framer-motion";
import cn from "@/constants/filters/cn";

const IntroSection = () => {
  const global = React.useContext(GlobalContext);

  const containerRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {once: true});

  return (
    <section className="container text-r-text pt-8 pb-7 md:pt-9 md:pb-8" id="intro" ref={containerRef}>
      <div
        className={cn("opacity-0 translate-y-6 transition duration-500", {
          "translate-y-0 opacity-1": isInView,
        })}
      >
        <span className="block font-heading5 -mb-1">Hi,</span>
        <h1 className="font-heading2">
          my name is <strong className="block sm:inline font-bold">Andre Mendonca</strong>
        </h1>
        <div className="inline-block">
          <div
            data-subtitle
            className="w-[110%] whitespace-nowrap overflow-hidden font-heading2 font-bold mb-6 text-r-accent-80 animate [&.animate]:animate-[typing_.5s_steps(28)]"
          >
            {global.themeMode === "devMode"
              ? "Front-end Dev"
              : "UI/UX Designer"}
          </div>
        </div>

        <a
          href="/AndreMendonca-CV.pdf"
          download
          className="group button flex items-center justify-between gap-2 text-n-white bg-r-accent-80 border-r-accent shadow-[0_0_4px_1px] shadow-r-accent-80 ml-0 hover:text-r-text hover:bg-transparent hover:shadow-lg hover:shadow-r-accent-80"
        >
          Download CV
          <DownloadDocIcon className="group-hover:[&>path]:fill-r-text [&>path]:td-150" />
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
