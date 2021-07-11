import { GetStaticProps } from 'next';
import PostList from '../components/PostList';
import { getDatabase } from '../lib/notion';
import styles from './index.module.scss';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }): JSX.Element {
  return (
    <>
      <h2 className={styles.heading}>Publicaciones</h2>
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
