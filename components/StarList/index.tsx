/* eslint-disable react/no-array-index-key */
import { Stack, StackProps } from '@chakra-ui/react';
import OutlineStar from '../Icons/OutlineStar';
import Star from '../Icons/Star';

interface IStarList extends StackProps{
    stars: number,
    direction: 'column' | 'row'
}

const STAR_LIMIT = 6;

function StarList({ stars, direction, ...props }: IStarList): JSX.Element {
  // 1- Fill array with Outline arrays
  const allStars = new Array(STAR_LIMIT).fill(OutlineStar);
  // 2- Fill array with stars
  allStars.fill(Star, 0, stars);

  return (
    <Stack direction={direction} {...props}>
      {allStars.map((Icon, i) => <Icon key={i} />)}
    </Stack>
  );
}

export default StarList;
