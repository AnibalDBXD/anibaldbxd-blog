import { useEffect } from 'react';
import Head from 'next/head';

import { withRouter } from 'next/router';
import Header from '../Header';
import PATHS from '../../config/paths';

import styles from './styles.module.css';
import user from '../../config/user';

function LayoutWrapper({ router, children }): JSX.Element {
  useEffect(() => {
    if (user.theme) document.body.classList.add(`${user.theme}-theme`);
  }, []);

  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <title>
          {user.mainTitle}
          {user.pageTitle}
        </title>
      </Head>
      <Header
        className={styles['adjust-content']}
        description={router.pathname === PATHS.home ? user.description : undefined}
        title={user.title}
      />
      <main className={styles['adjust-content']}>{children}</main>
    </>
  );
}

export default withRouter(LayoutWrapper);
