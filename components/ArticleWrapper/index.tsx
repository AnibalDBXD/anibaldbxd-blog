import Head from 'next/head';
import ReactDOMServer from 'react-dom/server';

import { ReactNode } from 'react';
import user from '../../config/user';

interface IProps {
  title: ReactNode;
  children: ReactNode;
}

function ArticleWrapper({ title, children }: IProps): JSX.Element {
  return (
    <>
      <Head>
        <title>
          {ReactDOMServer.renderToString(title)}
          {user.pageTitle}
        </title>
      </Head>

      <article>
        <section>{children}</section>
      </article>
    </>
  );
}

export default ArticleWrapper;
