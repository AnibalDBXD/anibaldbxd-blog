import {
  Heading, Link as ChakraLink, Flex, Text, useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { heading, headingHover } from '../../lib/chakra/colors';

import PATHS from '../../config/paths';

import ThemeToggler from '../ThemeToggler';

interface IProps {
  title: ReactNode;
  description?: ReactNode;
}

function Header({ title, description }: IProps): JSX.Element {
  const headingColor = useColorModeValue(heading.light, heading.dark);
  const headingHoverColor = useColorModeValue(headingHover.light, headingHover.dark);
  return (
    <Flex
      alignItems="center"
      as="header"
      flexWrap="wrap"
      justifyContent="space-between"
      margin="0"
    >
      <Heading>
        <Link href={PATHS.home} passHref>
          <ChakraLink
            _hover={{
              color: headingHoverColor,
              textDecoration: 'none',
            }}
            color={headingColor}
            fontSize="32px"
            fontWeight="500"
          >
            {title}
          </ChakraLink>
        </Link>
      </Heading>
      <ThemeToggler />
      {description && <Text fontSize="lg" marginTop="1rem" width="100%">{description}</Text>}
    </Flex>
  );
}

export default Header;
