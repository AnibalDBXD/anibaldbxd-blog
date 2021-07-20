import { useColorModeValue } from '@chakra-ui/react';
import { StarIcon, IconProps } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { star } from '../../../lib/chakra/colors';
import { turningProperties } from '../utils';

const MotionStar = motion<IconProps>(StarIcon);

function Star(): JSX.Element {
  const starColor = useColorModeValue(star.light, star.dark);
  return (
    <MotionStar
      color={starColor}
      {...turningProperties}
    />
  );
}

export default Star;
