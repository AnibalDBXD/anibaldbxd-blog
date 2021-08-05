import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PostPage from '../[id]';
// eslint-disable-next-line import/extensions
import mockedPosts from '../../cypress/fixtures/post.json';

export default function PostMock({ page, blocks }): JSX.Element {
  return (
    <PostPage blocks={blocks} page={page} />
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: process.env.NODE_ENV === 'production' ? false : 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    page: mockedPosts.page.page,
    blocks: mockedPosts.page.blocks,
    ...(await serverSideTranslations(locale, ['common'])),
  },
  revalidate: 1,
});
