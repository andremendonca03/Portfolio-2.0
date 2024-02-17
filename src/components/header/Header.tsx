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

  return (
    <header className="sticky top-0 bg-r-bg td-150 z-50 md:bg-r-bgGlassy md:backdrop-blur-lg">
      <div className="container flex justify-between items-center py-3">
        <Link href="/" className="hover:scale-110 transition duration-150">
          <LogoIcon className="size-5 md:size-[50px]" />
        </Link>

        <nav className="group hidden gap-5 font-large text-r-text md:flex">
          <Link className="group-hover:opacity-40 hover:!opacity-100 td-150" href={"#about-me"}>About me</Link>
          <Link className="group-hover:opacity-40 hover:!opacity-100 td-150" href={"#skills"}>Skills</Link>
          <Link className="group-hover:opacity-40 hover:!opacity-100 td-150" href={"#showcase"}>Showcase</Link>
          <Link className="group-hover:opacity-40 hover:!opacity-100 td-150" href={"#contact"}>Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LampIcon className="cursor-pointer [html.devMode_&>.inside]:fill-none [html.designMode_&>.stroke]:fill-r-text"
                onClick={global.handleThemeChange} />
              </TooltipTrigger>

              <TooltipContent>
                <p>
                {global.themeMode === "devMode"
                ? "Design Mode"
                : "Dev Mode"
                }</p>
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