import {
  Heading, Link as ChakraLink, Flex, Text, useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

import PATHS from '../../config/paths';

import ThemeToggler from '../ThemeToggler';

interface IProps {
  title: ReactNode;
  description?: ReactNode;
}

function Header({ title, description }: IProps): JSX.Element {
  const headingColor = useColorModeValue('green.400', 'green.300');
  return (
    <Flex
      alignItems="center"
      as="header"
      flexWrap="wrap"
      height="100px"
      justifyContent="space-between"
      maxWidth="1024px"
    >
      <Heading>
        <Link href={PATHS.home} passHref>
          <ChakraLink
            _hover={{ textDecoration: 'none' }}
            color={headingColor}
            fontSize="32px"
            fontWeight="500"
          >
            {title}
          </ChakraLink>
        </Link>
      </Heading>
      <ThemeToggler />
      {description && <Text fontSize="lg" width="100%">{description}</Text>}
    </Flex>
  );
}

export default Header;
