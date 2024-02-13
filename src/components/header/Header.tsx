"use client";

import React from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";
import LampIcon from "../icons/LampIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import MobileMenu from "./MobileMenu";


const Header = () => {
  const global = React.useContext(GlobalContext);
  const [currentTheme, setCurrentTheme] = React.useState("Design Mode");

  function handleThemeChange() {
    global.setThemeMode(prev => {
      if (prev === "designMode") {
        setCurrentTheme("Design Mode");
        return "devMode";
      }

      setCurrentTheme("Dev Mode");
      return "designMode";
    });
  }

  return (
    <header className="sticky top-0 bg-r-bg td-150 z-50 md:bg-r-bgGlassy md:backdrop-blur-lg">
      <div className="container flex justify-between items-center py-3">
        <Link href="/" className="hover:scale-110 transition duration-150">
          <LogoIcon className="size-5 md:size-[50px]" />
        </Link>

        <nav className="hidden gap-5 font-large text-r-text md:flex">
          <Link href={"#about-me"}>About me</Link>
          <Link href={"#skills"}>Skills</Link>
          <Link href={"#showcase"}>Showcase</Link>
          <Link href={"#contact"}>Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
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

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default Header;