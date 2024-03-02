'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PageStaticPath } from '@constants';

import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const hereIcon = (path: PageStaticPath) => (pathname === path ? '👈' : '');

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={PageStaticPath.Home}>Home</Link>
          {hereIcon(PageStaticPath.Home)}
        </li>
        <li>
          <Link href={PageStaticPath.About}>About</Link>
          {hereIcon(PageStaticPath.About)}
        </li>
      </ul>
    </nav>
  );
}
