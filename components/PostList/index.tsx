/* eslint-disable quote-props */
import {
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IPost } from '../../interfaces/types';
import FilterPosts from '../FilterPosts';
import Post from '../Post';

interface IProps {
  posts: IPost[];
}

function PostList({ posts }: IProps): JSX.Element {
  const [currentPosts, setCurrentPosts] = useState(posts);

  return (
    <>
      <FilterPosts posts={posts} setPosts={setCurrentPosts} />
      <VStack alignItems="baseline" as="ul" marginTop="1rem" spacing="32px" style={{ listStyle: 'none ' }}>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <Post {...post} />
          </li>
        ))}
      </VStack>
    </>
  );
}

export default PostList;
