import tagsToString from '../../utils/tagsToString';
import { IPost } from '../../interfaces/types';

export const ANIME_TAG = 'anime';
export const MANGA_TAG = 'manga';

export function filterPostsByTag(posts: IPost[], tag: string): IPost[] {
  const filteredPosts = posts.filter(({ properties: { Tags } }) => {
    const postTag = tagsToString(Tags);
    return postTag.includes(tag);
  });
  return filteredPosts;
}
