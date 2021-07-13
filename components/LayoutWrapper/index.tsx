import Head from 'next/head';

import { withRouter } from 'next/router';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Header from '../Header';
import PATHS from '../../config/paths';

import user from '../../config/user';
import { background } from '../../chakra/colors';

function LayoutWrapper({ router, children }): JSX.Element {
  const backgroundColor = useColorModeValue(background.light, background.dark);
  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <title>
          {user.mainTitle}
          {user.pageTitle}
        </title>
      </Head>
      <Box
        backgroundColor={backgroundColor}
        minHeight="100vh"
        paddingX="20px"
      >
        <Header
          description={router.pathname === PATHS.home ? user.description : undefined}
          isHome={router.pathname === PATHS.home}
          title={user.title}
        />
        <Box as="main">{children}</Box>
      </Box>
    </>
  );
}

export default withRouter(LayoutWrapper);
