import { Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import PostList from '../components/PostList';
import { getDatabase } from '../lib/notion';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }): JSX.Element {
  return (
    <>
      <Heading>Publicaciones</Heading>
      <PostList posts={posts} />
    </>
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
