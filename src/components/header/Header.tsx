"use client";

import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";
import LampIcon from "../icons/LampIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react";

const Header = () => {

  const [currentTheme, setCurrentTheme] = React.useState("Dev Mode");

  function handleThemeChange() {
    const html = document.documentElement;
    if (html) {
      html.classList.toggle("devMode");
      html.classList.toggle("designMode");

      if (html.classList.contains("devMode")) {
        setCurrentTheme("Design Mode");
      } else {
        setCurrentTheme("Dev Mode");
      }
    }
  }

  return (
    <header className="sticky top-0 bg-r-bg td-150 ">
      <div className="container flex justify-between items-center py-3">
        <Link href="/" className="hover:scale-110 transition duration-150">
          <LogoIcon />
        </Link>

        <nav className="flex gap-5 font-large text-r-text">
          <Link href="#about-me" scroll={false}>About me</Link>
          <Link href="#skills" scroll={false}>Skills</Link>
          <Link href="#showcase" scroll={false}>Showcase</Link>
          <Link href="#contact" scroll={false}>Contact</Link>
        </nav>

        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LampIcon className="cursor-pointer [html.devMode_&>.inside]:fill-none [html.designMode_&>.stroke]:fill-r-text"
                onClick={handleThemeChange} />
              </TooltipTrigger>

              <TooltipContent>
                <p>{currentTheme}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>


        </div>
      </div>
    </header>
  )
}

export default Header;