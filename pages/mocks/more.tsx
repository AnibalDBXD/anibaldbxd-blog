import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MorePage from '../more';
// eslint-disable-next-line import/extensions
import mockedPosts from '../../cypress/fixtures/post.json';

export default function MoreMock({ posts }): JSX.Element {
  return (
    <MorePage posts={posts} />
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    posts: mockedPosts.posts,
    ...(await serverSideTranslations(locale, ['common'])),
  },
  revalidate: 1,
});
