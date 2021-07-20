import Head from 'next/head';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import PostList from '../components/PostList';
import { getDatabase } from '../lib/notion';
import TextWithLine from '../components/TextWithLine';
import { primaryColor } from '../lib/chakra/colors';
import PATHS from '../config/paths';
import { languages } from '../next-i18next.config';

const { ENGLISH, SPANISH } = languages;

export const DATABASE_LANGUAGES = {
  [SPANISH.short]: process.env.NOTION_DATABASE_ID,
  [ENGLISH.short]: process.env.ENGLISH_NOTION_DATABASE_ID,
};

export default function Home({ posts }): JSX.Element {
  const buttonColor = useColorModeValue(primaryColor.light, primaryColor.dark);
  const { push } = useRouter();
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <meta content="index, follow" name="robots" />
      </Head>
      <Box paddingX="20px">
        <TextWithLine>
          {t('publications')}
        </TextWithLine>
        <PostList posts={posts} />
        <Button
          borderColor={buttonColor}
          color={buttonColor}
          marginTop="2rem"
          onClick={(): void => { push(PATHS.more); }}
          rightIcon={<ExternalLinkIcon />}
          variant="outline"
        >
          {t('more')}
        </Button>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const databaseId = DATABASE_LANGUAGES[locale] || SPANISH.short;
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1,
  };
};
