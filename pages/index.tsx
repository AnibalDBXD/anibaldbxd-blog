import Head from 'next/head';
import { useColorModeValue, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import PostList from '../components/PostList';
import { getDatabase } from '../lib/notion';
import TextWithLine from '../components/TextWithLine';
import { primaryColor } from '../lib/chakra/colors';
import PATHS from '../config/paths';
import { languages } from '../next-i18next.config';
import SEO from '../components/SEO';

const { ENGLISH, SPANISH } = languages;

export const DATABASE_LANGUAGES = {
  [SPANISH.short]: process.env.NOTION_DATABASE_ID,
  [ENGLISH.short]: process.env.ENGLISH_NOTION_DATABASE_ID,
};

export default function Home({ posts }): JSX.Element {
  const buttonColor = useColorModeValue(primaryColor.light, primaryColor.dark);
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <SEO />
      </Head>
      <TextWithLine>
        {t('publications')}
      </TextWithLine>
      <PostList posts={posts} />
      <NextLink href={PATHS.more} passHref>
        <Link
          _hover={{ textDecoration: 'none' }}
          alignItems="center"
          borderColor={buttonColor}
          borderRadius="0.3rem"
          borderStyle="solid"
          borderWidth="1px"
          color={buttonColor}
          display="flex"
          height="10"
          justifyContent="center"
          marginTop="2rem"
          paddingX="4"
          width="fit-content"
        >
          {t('more')}
          <ExternalLinkIcon marginLeft="0.5rem" />
        </Link>
      </NextLink>
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
