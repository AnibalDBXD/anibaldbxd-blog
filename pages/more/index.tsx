import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import TextWithLine from '../../components/TextWithLine';
import PostGrid from '../../components/PostGrid';
import { getDatabase } from '../../lib/notion';

const databaseId = process.env.NOTION_MORE_DATABASE;

export default function More({ posts }): JSX.Element {
  return (
    <Box paddingX="20px">
      <TextWithLine>
        Mas publicaciones
      </TextWithLine>
      <PostGrid posts={posts} />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
