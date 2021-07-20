import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TextWithLine from '../../components/TextWithLine';
import PostGrid from '../../components/PostGrid';
import { getDatabase } from '../../lib/notion';
import user from '../../config/user';

const databaseId = process.env.NOTION_MORE_DATABASE;

export default function More({ posts }): JSX.Element {
  const { t } = useTranslation('more');

  return (
    <>
      <Head>
        <title>
          {t('title')}
          {user.pageTitle}
        </title>
      </Head>
      <Box paddingBottom="2rem" paddingX="20px">
        <TextWithLine>
          {t('textWithLine')}
        </TextWithLine>
        <PostGrid haveContent={false} posts={posts} />
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
      ...(await serverSideTranslations(locale, ['common', 'more'])),
    },
    revalidate: 1,
  };
};
