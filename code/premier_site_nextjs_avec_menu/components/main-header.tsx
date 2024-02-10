'use client';

import LogoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const path = usePathname();

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={LogoImg} alt="Raoul la giraffe" />
        Blog animalier
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href="/blog"
              className={path.startsWith('/blog') ? classes.active : undefined}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                path.startsWith('/contact') ? classes.active : undefined
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
