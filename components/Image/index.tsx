import { chakra } from '@chakra-ui/react';
import NextImage from 'next/image';

const Image = chakra(NextImage, {
  baseStyle: { width: 120, height: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

export default Image;
