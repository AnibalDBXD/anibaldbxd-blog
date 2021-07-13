import { Text, useColorModeValue, Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import PostList from '../components/PostList';
import { getDatabase } from '../lib/notion';
import { line } from '../chakra/colors';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }): JSX.Element {
  const lineColor = useColorModeValue(line.light, line.dark);
  return (
    <Box paddingX="20px">
      <Text
        _after={{
          backgroundColor: lineColor,
          content: '" "',
          display: 'block',
          height: '1px',
          margin: '0 15px',
          width: '100%',
        }}
        alignItems="center"
        display="flex"
        fontSize="16px"
        fontWeight="500"
        letterSpacing=".5px"
        marginY="1rem"
        opacity=".6"
        textTransform="uppercase"
      >
        Publicaciones
      </Text>
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
