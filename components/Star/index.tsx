import { useColorModeValue } from '@chakra-ui/react';
import { StarIcon, IconProps } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { star } from '../../lib/chakra/colors';

const MotionStar = motion<IconProps>(StarIcon);

const Star = (): JSX.Element => {
  const starsColor = useColorModeValue(star.light, star.dark);
  return (
    <MotionStar
      color={starsColor}
      whileHover={{ rotateZ: 20 }}
      whileTap={{ rotateZ: 360 }}
    />
  );
};

export default Star;
