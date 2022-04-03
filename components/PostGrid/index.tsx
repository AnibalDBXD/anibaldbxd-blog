import { Box, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IPost } from '../../interfaces/types';
import FilterPosts from '../FilterPosts';
import Post from '../Post';
import Search from '../Search';

interface IProps {
    posts: IPost[];
    haveContent?: boolean
}

function PostGrid({ posts, haveContent }: IProps): JSX.Element {
  const [currentPosts, setCurrentPosts] = useState(posts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      setCurrentPosts(() => {
        const filteredPosts = posts.filter((post) => {
          const postName = post.properties.Name.title[0].plain_text.toLowerCase().trim();
          const alternativeName = post
            .properties.JaponeseName.rich_text[0].plain_text.toLowerCase().trim();

          const searchTerm = search.toLocaleLowerCase().trim();
          return (
            postName.includes(searchTerm) || alternativeName.includes(searchTerm)
          );
        });
        return filteredPosts;
      });
    } else {
      setCurrentPosts(posts);
    }
  }, [setCurrentPosts, search, posts]);

  return (
    <>
      <Box display="flex">
        <Search maxWidth="500px" setValue={setSearch} value={search} />
        <FilterPosts posts={posts} setPosts={setCurrentPosts} />
      </Box>
      <SimpleGrid as="ul" columns={[1, 1, 2, 3]} gridGap="4rem" style={{ listStyle: 'none ' }}>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <Post key={post.id} haveContent={haveContent} {...post} />
          </li>
        ))}
      </SimpleGrid>
    </>
  );
}

export default PostGrid;
