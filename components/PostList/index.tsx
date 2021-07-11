import { renderTitle } from '@9gustin/react-notion-render';
import Title from '@9gustin/react-notion-render/dist/types/Title';
import Link from 'next/link';
import dateToString from '../../utils/dateToString';

interface IProps {
  posts: {
    id: string;
    lastEditedTime: string;
    properties: { Name: Title };
  }[];
}

function PostList({ posts }: IProps): JSX.Element {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/${post.id}`}>
            <a>
              <h3>
                <Link href={`/${post.id}`}>
                  {renderTitle(post.properties.Name)}
                </Link>
              </h3>

              <p>
                {dateToString(post.lastEditedTime)}
              </p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
