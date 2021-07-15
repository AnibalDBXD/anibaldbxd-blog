import { SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { IPost } from '../../interfaces/types';
import FilterPosts from '../FilterPosts';
import Post from '../Post';

  interface IProps {
      posts: IPost[];
      haveContent?: boolean
  }

function PostGrid({ posts, haveContent }: IProps): JSX.Element {
  const [currentPosts, setCurrentPosts] = useState(posts);

  const setPosts = (newPosts: IPost[]): void => setCurrentPosts(newPosts);
  return (
    <>
      <FilterPosts posts={posts} setPosts={setPosts} />
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {currentPosts.map((post) => (
          <Post key={post.id} haveContent={haveContent} {...post} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default PostGrid;