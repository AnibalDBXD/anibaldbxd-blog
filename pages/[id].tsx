import { Render } from '@9gustin/react-notion-render';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getDatabase, getPage, getBlocks } from '../lib/notion';
import ArticleWrapper from '../components/ArticleWrapper';
// eslint-disable-next-line import/extensions
import mockPosts from '../cypress/fixtures/post.json';

import { DATABASE_LANGUAGES } from '.';

export default function Post({ page, blocks }): JSX.Element {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <ArticleWrapper {...page} title={<Render blocks={[page.properties.Name]} />}>
      <Render blocks={blocks} useStyles />
    </ArticleWrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const databases = await Promise.all(
    locales.map((locale) => getDatabase(DATABASE_LANGUAGES[locale])),
  );
  return {
    paths: databases.map(
      (database) => database.map((page) => ({ params: { id: page.id } })),
    ).flat(),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { id } = params;

  // Fix console error on run tests
  if (mockPosts.posts[0].id === id) {
    return {
      props: {
        page: mockPosts.page.page,
        blocks: mockPosts.page.blocks,
        ...(await serverSideTranslations(locale, ['common'])),
      },
      revalidate: 1,
    };
  }

  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => ({
        id: block.id,
        children: await getBlocks(block.id),
      })),
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      // eslint-disable-next-line no-param-reassign
      block[block.type].children = childBlocks.find(
        (x) => x.id === block.id,
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1,
  };
};
