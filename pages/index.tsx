import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PostList from '../components/PostList';
import { getDatabase } from '../lib/notion';
import TextWithLine from '../components/TextWithLine';
import { primaryColor } from '../lib/chakra/colors';
import PATHS from '../config/paths';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }): JSX.Element {
  const buttonColor = useColorModeValue(primaryColor.light, primaryColor.dark);
  const { push } = useRouter();
  return (
    <Box paddingX="20px">
      <TextWithLine>
        Publicaciones
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
        More
      </Button>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 1,
  };
};
