import {
  RadioGroup, HStack, Radio, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IPost } from './types';
import Post from './Post';

interface IProps {
  posts: IPost[];
}

function PostList({ posts }: IProps): JSX.Element {
  const [radio, setRadio] = useState('1');
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
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </VStack>
    </>
  );
}

export default PostList;
