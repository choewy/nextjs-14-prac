'use client';

import Link from 'next/link';

import { PageStaticPath } from '../constants';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const hereIcon = (path: PageStaticPath) => (pathname === path ? '👈' : '');

  const [count, setCount] = useState<number>(0);

  return (
    <nav>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
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
          <ul>
            <li>
              <Link href={PageStaticPath.Sales}>
                Sales {hereIcon(PageStaticPath.Sales)}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
