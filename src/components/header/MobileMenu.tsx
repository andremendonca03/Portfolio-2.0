'use client';

import React from 'react';
import styles from "./MobileMenu.module.scss";
import Link from 'next/link';

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
          <Link href={"#about-me"}>About me</Link>
          <Link href={"#skills"}>Skills</Link>
          <Link href={"#showcase"}>Showcase</Link>
          <Link href={"#contact"}>Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;