import { Stack, Radio, RadioGroup } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { IPost } from '../../interfaces/types';
import { filterPostsByTag, getUniqueTagsByPosts } from './utils';

interface IFilterPosts {
  setPosts: (posts: IPost[]) => void;
  posts: IPost[];
}

const FilterPosts = ({ setPosts, posts }: IFilterPosts): JSX.Element => {
  const { push, query } = useRouter();
  const { t } = useTranslation('common');

  const radio = (query.tag as string) || 'all';
  const tags = useMemo(() => getUniqueTagsByPosts(posts), [posts]);

  useEffect(() => {
    if (radio === 'all') {
      setPosts(posts);
    } else {
      setPosts(filterPostsByTag(posts, radio));
    }
  }, [posts, radio, setPosts]);

  if (tags.length <= 2) {
    return null;
  }

  return (
    <RadioGroup
      marginBottom="3rem"
      onChange={(tag): void => {
        push(`/?tag=${tag}`, null, { shallow: true });
      }}
      value={radio}
    >
      <Stack direction={['column', 'row']} spacing="20px" textTransform="capitalize">
        <Radio value="all">{t('all')}</Radio>
        {tags.map((tag) => <Radio key={tag} value={tag}>{t(tag)}</Radio>)}
      </Stack>
    </RadioGroup>
  );
};

export default FilterPosts;
