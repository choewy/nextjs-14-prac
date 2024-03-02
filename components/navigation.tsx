import Link from 'next/link';

import { PageStaticPath } from '../constants';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={PageStaticPath.Home}>Home</Link>
        </li>
        <li>
          <Link href={PageStaticPath.About}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
