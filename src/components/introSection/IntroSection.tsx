'use client';

import React from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import DownloadDocIcon from "../icons/DownloadDocIcon";

const IntroSection = () => {
  const global = React.useContext(GlobalContext);

  console.log(global);

  return (
    <section className="container text-r-text py-9">
      <span className="block font-heading5 -mb-1">Hi,</span>
      <h1 className="font-heading2">my name is <strong className="font-bold">Andre Mendonca</strong></h1>
      <div data-subtitle className="font-heading2 font-bold mb-6 text-r-accent-80">
        {
          global.themeMode === "devMode"
          ? "Front-end Dev"
          : "UI/UX Designer"
        }

      </div>

      <a href="#" download className="group button flex items-center justify-between gap-2 text-n-white bg-r-accent-80 border-r-accent shadow-[0_0_4px_1px] shadow-r-accent-80 ml-0 hover:text-r-text hover:bg-transparent hover:shadow-lg hover:shadow-r-accent-80">
        Download CV
        <DownloadDocIcon className="group-hover:[&>path]:fill-r-text [&>path]:td-150" />
      </a>

    </section>
  );
}

export default IntroSection;
