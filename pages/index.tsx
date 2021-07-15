import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import PostList from '../components/PostList';
import { getDatabase } from '../lib/notion';
import TextWithLine from '../components/TextWithLine';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }): JSX.Element {
  return (
    <Box paddingX="20px">
      <TextWithLine>
        Publicaciones
      </TextWithLine>
      <PostList posts={posts} />
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
