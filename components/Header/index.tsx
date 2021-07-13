import {
  Heading, Link as ChakraLink, Flex, Text, useColorModeValue, IconButton,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import PATHS from '../../config/paths';

import ThemeToggler from '../ThemeToggler';

interface IProps {
  title: ReactNode;
  description?: ReactNode;
  isPost: boolean;
}

function Header({ title, description, isPost }: IProps): JSX.Element {
  const headingColor = useColorModeValue('green.400', 'green.300');
  const headingHoverColor = useColorModeValue('green.300', 'green.200');
  const { push } = useRouter();
  return (
    <Flex
      alignItems="center"
      as="header"
      flexWrap="wrap"
      height="100px"
      justifyContent="space-between"
    >
      {
        isPost
          ? (
            // Use IconButton instead of Link/ChakraLink because Link only render text, not icons
            <IconButton
              _hover={{
                color: headingHoverColor,
              }}
              aria-label="go back"
              backgroundColor="transparent"
              border="0"
              color={headingColor}
              cursor="pointer"
              icon={<ArrowBackIcon fontSize="46px" />}
              onClick={(): void => { push(PATHS.home); }}
              variant="link"
            />
          )
          : (
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
          )
      }

      <ThemeToggler />
      {description && <Text fontSize="lg" width="100%">{description}</Text>}
    </Flex>
  );
}

export default Header;
