import Head from 'next/head';
import { withRouter } from 'next/router';

import { Box, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Header from '../Header';
import PATHS from '../../config/paths';
import user from '../../config/user';
import { background } from '../../lib/chakra/colors';
import Settings from '../Settings';
import useProgress from '../../hooks/useProgress';

const {
  mainTitle, pageTitle,
} = user;

function LayoutWrapper({ router, children }): JSX.Element {
  const backgroundColor = useColorModeValue(background.light, background.dark);
  const { t } = useTranslation('common');

  // Progress bar when change path
  useProgress(router);

  const description = {
    [PATHS.home]: t('description'),
    [PATHS.more]: t('moreDescription'),
  };

  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <title>
          {mainTitle}
          {pageTitle}
        </title>
      </Head>
      <Box
        backgroundColor={backgroundColor}
        minHeight="100vh"
        paddingX="20px"
      >
        <Header
          description={description[router.pathname] || undefined}
          isHome={router.pathname === PATHS.home}
          title={user.title}
        />
        <Box as="main">{children}</Box>
        {router.pathname === PATHS.home && <Settings />}
      </Box>

    </>
  );
}

export default withRouter(LayoutWrapper);
