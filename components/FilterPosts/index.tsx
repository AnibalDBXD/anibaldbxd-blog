import { HStack, Radio, RadioGroup } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { IPost } from '../../interfaces/types';
import { filterPostsByTag, ANIME_TAG, MANGA_TAG } from './utils';

interface IFilterPosts {
    setPosts: (posts: IPost[]) => void;
    posts: IPost[];
}

const FilterPosts = ({ setPosts, posts }: IFilterPosts): JSX.Element => {
  const [radio, setRadio] = useState('1');
  const { t } = useTranslation('common');

  useEffect(() => {
    const POSTS_OPTIONS = {
      // all posts
      1: posts,
      // anime posts
      2: filterPostsByTag(posts, ANIME_TAG),
      // manga posts
      3: filterPostsByTag(posts, MANGA_TAG),
    };

    setPosts(POSTS_OPTIONS[radio] || posts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radio]);
  return (
    <RadioGroup marginBottom="3rem" onChange={setRadio} value={radio}>
      <HStack spacing="20px">
        <Radio value="1">{t('all')}</Radio>
        <Radio value="2">Anime</Radio>
        <Radio value="3">Manga</Radio>
      </HStack>
    </RadioGroup>
  );
};

export default FilterPosts;
