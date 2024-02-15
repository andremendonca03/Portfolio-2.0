'use client';

import React from 'react';
import styles from "./MobileMenu.module.scss";
import Link from 'next/link';
import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';
import DribbbleIcon from '../icons/DribbbleIcon';
import MailIcon from '../icons/MailIcon';

const MobileMenu = () => {
  const mobileMenu = React.useRef<HTMLDivElement>(null);

  function handleToggleMenu(e: React.MouseEvent) {
    if (mobileMenu.current && e.currentTarget.children[0]) {
      mobileMenu.current.classList.toggle("active");
      e.currentTarget.children[0].classList.toggle("active");

      document.body.classList.toggle("preventScroll");
    }
  }

  return (
    <div className='md:hidden'>
      <div className='py-3 px-1' aria-label="Toggle Mobile Menu" onClick={handleToggleMenu}>
        <div className={styles.mobileMenuToggle}></div>
      </div>

      <div ref={mobileMenu} className={styles.mobileMenuWrapper}>
        <nav className={styles.mobileMenu}>
          <div className={styles.mobileMenuNav}>
            <Link href={"#about-me"}>About me</Link>
            <Link href={"#skills"}>Skills</Link>
            <Link href={"#showcase"}>Showcase</Link>
            <Link href={"#contact"}>Contact</Link>
          </div>

          <div className={styles.mobileMenuSocials}>
            <a href="https://www.linkedin.com/in/andremendonca03/" target="_blank" className="group p-1">
              <LinkedinIcon className="size-[24px] [&>path]:fill-r-text group-hover:[&>path]:fill-[#0E76A8] [&>path]:td-150" />
            </a>

            <a href="https://github.com/andremendonca03" target="_blank" className="group p-1">
              <GithubIcon className="size-[24px] [&>path]:fill-r-text group-hover:[&>path]:fill-n-grey [&>path]:td-150" />
            </a>

            <a href="https://dribbble.com/andremendonca03" target="_blank" className="group p-1">
              <DribbbleIcon className="size-[24px] [&>path]:fill-r-text group-hover:[&>path]:fill-[#D8BAF1] [&>path]:td-150" />
            </a>

            <a href="mailto:andremendonca.033@gmail.com" className="group p-1">
              <MailIcon className="size-[24px] [&>path]:fill-r-text group-hover:[&>path]:fill-r-accent [&>path]:td-150" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;