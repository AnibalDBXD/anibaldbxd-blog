/* eslint-disable quote-props */
import {
  RadioGroup, HStack, Radio, VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IPost } from './types';
import Post from './Post';
import { filterPostsByTag, ANIME_TAG, MANGA_TAG } from './utils';

interface IProps {
  posts: IPost[];
}

function PostList({ posts }: IProps): JSX.Element {
  const [radio, setRadio] = useState('1');
  const [currentPosts, setCurrentPosts] = useState(posts);

  useEffect(() => {
    const POSTS_OPTIONS = {
      // all posts
      '1': posts,
      // anime posts
      '2': filterPostsByTag(posts, ANIME_TAG),
      // manga posts
      '3': filterPostsByTag(posts, MANGA_TAG),
    };

    setCurrentPosts(POSTS_OPTIONS[radio] || posts);
  }, [radio, posts]);

  return (
    <>
      <RadioGroup marginBottom="3rem" onChange={setRadio} value={radio}>
        <HStack spacing="20px">
          <Radio value="1">Todos</Radio>
          <Radio value="2">Anime</Radio>
          <Radio value="3">Manga</Radio>
        </HStack>
      </RadioGroup>
      <VStack alignItems="baseline" marginTop="1rem" spacing="32px">
        {currentPosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </VStack>
    </>
  );
}

export default PostList;
