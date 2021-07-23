import { HStack, Radio, RadioGroup } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo, useState } from 'react';
import { IPost } from '../../interfaces/types';
import { filterPostsByTag, getUniqueTagsByPosts } from './utils';

interface IFilterPosts {
  setPosts: (posts: IPost[]) => void;
  posts: IPost[];
}

const FilterPosts = ({ setPosts, posts }: IFilterPosts): JSX.Element => {
  const [radio, setRadio] = useState('all');
  const { t } = useTranslation('common');

  const tags = useMemo(() => getUniqueTagsByPosts(posts), [posts]);

  useEffect(() => {
    if (radio === 'all') {
      setPosts(posts);
    } else {
      setPosts(filterPostsByTag(posts, radio));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radio]);
  if (tags.length <= 2) {
    return <div />;
  }

  return (
    <RadioGroup marginBottom="3rem" onChange={setRadio} value={radio}>
      <HStack spacing="20px" textTransform="capitalize">
        <Radio value="all">{t('all')}</Radio>
        {tags.map((tag) => <Radio key={tag} value={tag}>{t(tag)}</Radio>)}
      </HStack>
    </RadioGroup>
  );
};

export default FilterPosts;
