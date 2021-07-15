import { ITag } from '../interfaces/types';

export default function tagsToString(tags: ITag): string {
  return tags.multi_select.map((tag) => tag.name).join(' ');
}
