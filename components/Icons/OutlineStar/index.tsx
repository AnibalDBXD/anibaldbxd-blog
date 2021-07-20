import { createIcon } from '@chakra-ui/icons';
import { IconProps, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { star } from '../../../lib/chakra/colors';
import { turningProperties } from '../utils';

const OutlineStarIcon = createIcon({
  viewBox: '-0.750 -0.820 25.500 25.700',
  displayName: 'OutlineStarIcon',
  path: (
    <path d="M 23.555 8.729 a 1.505 1.505 0 0 0 -1.406 -0.98 H 16.062 a 0.5 0.5 0 0 1 -0.472 -0.334 L 13.405 1.222 a 1.5 1.5 0 0 0 -2.81 0 l -0.005 0.016 L 8.41 7.415 a 0.5 0.5 0 0 1 -0.471 0.334 H 1.85 A 1.5 1.5 0 0 0 0.887 10.4 l 5.184 4.3 a 0.5 0.5 0 0 1 0.155 0.543 L 4.048 21.774 a 1.5 1.5 0 0 0 2.31 1.684 l 5.346 -3.92 a 0.5 0.5 0 0 1 0.591 0 l 5.344 3.919 a 1.5 1.5 0 0 0 2.312 -1.683 l -2.178 -6.535 a 0.5 0.5 0 0 1 0.155 -0.543 l 5.194 -4.306 A 1.5 1.5 0 0 0 23.555 8.729 Z" fill="none" stroke="currentColor" strokeWidth="2" />
  ),
});

const MotionOutlineStar = motion<IconProps>(OutlineStarIcon);

function OutlineStar(): JSX.Element {
  const starColor = useColorModeValue(star.light, star.dark);
  return (
    <MotionOutlineStar color={starColor} {...turningProperties} />
  );
}

export default OutlineStar;
