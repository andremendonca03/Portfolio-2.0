"use client";

import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";
import LampIcon from "../icons/LampIcon";

const Header = () => {
  return (
    <header className="sticky top-0 bg-n-darkBg ">
      <div className="container flex justify-between items-center py-3">
        <Link href="/" className="hover:scale-110 transition duration-150">
          <LogoIcon />
        </Link>

        <nav className="flex gap-5 font-large text-n-white">
          <Link href="#about-me" scroll={false}>About me</Link>
          <Link href="#skills" scroll={false}>Skills</Link>
          <Link href="#showcase" scroll={false}>Showcase</Link>
          <Link href="#contact" scroll={false}>Contact</Link>
        </nav>

        <div>
          <LampIcon className="cursor-pointer" onClick={() => {
            if (document.documentElement) {
              document.documentElement.classList.toggle("devMode");
              document.documentElement.classList.toggle("designMode");
            }
          }} />
        </div>
      </div>
    </header>
  )
}

export default Header;