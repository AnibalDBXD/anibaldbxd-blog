import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePage from '../index';
// eslint-disable-next-line import/extensions
import mockedPosts from '../../cypress/fixtures/post.json';

export default function HomeMock({ posts }): JSX.Element {
  return (
    <HomePage posts={posts} />
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    posts: mockedPosts.posts,
    ...(await serverSideTranslations(locale, ['common'])),
  },
  revalidate: 1,
});
