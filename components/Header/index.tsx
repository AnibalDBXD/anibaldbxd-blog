import Link from 'next/link';
import { ReactNode } from 'react';

import PATHS from '../../config/paths';

import ThemeToggler from '../ThemeToggler';

import styles from './styles.module.css';

interface IProps {
  title: ReactNode;
  className?: string;
  description?: ReactNode;
}

function Header({ className, title, description }: IProps): JSX.Element {
  return (
    <header className={`${styles.header} ${className || ''}`}>
      <h1>
        <Link href={PATHS.home}>
          <a className={styles.title}>{title}</a>
        </Link>
      </h1>
      <ThemeToggler />
      {description && <p>{description}</p>}
    </header>
  );
}

export default Header;
