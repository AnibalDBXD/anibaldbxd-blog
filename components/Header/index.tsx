import Link from 'next/link';
import { ReactNode } from 'react';

import PATHS from '../../config/paths';

import ThemeToggler from '../ThemeToggler';

interface IProps {
  title: ReactNode;
  description?: ReactNode;
}

function Header({ title, description }: IProps): JSX.Element {
  return (
    <header>
      <h1>
        <Link href={PATHS.home}>
          <a>{title}</a>
        </Link>
      </h1>
      <ThemeToggler />
      {description && <p>{description}</p>}
    </header>
  );
}

export default Header;
