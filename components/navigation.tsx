'use client';

import Link from 'next/link';

import { PageStaticPath } from '../constants';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const hereIcon = (path: PageStaticPath) => (pathname === path ? '👈' : '');

  return (
    <nav>
      <ul>
        <li>
          <Link href={PageStaticPath.Home}>
            Home {hereIcon(PageStaticPath.Home)}
          </Link>
        </li>
        <li>
          <Link href={PageStaticPath.About}>
            About {hereIcon(PageStaticPath.About)}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
