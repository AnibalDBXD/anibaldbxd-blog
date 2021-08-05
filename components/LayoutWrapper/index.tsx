import Head from 'next/head';
import { withRouter } from 'next/router';

import { Box, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
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

  const isHome = useMemo((): boolean =>
    router.pathname === PATHS.home || router.pathname === PATHS.mockHome,
  [router.pathname]);
  // Progress bar when change path
  useProgress(router);

  const description = {
    [PATHS.home]: t('description'),
    [PATHS.mockHome]: t('description'),
    [PATHS.more]: t('moreDescription'),
    [PATHS.mockMore]: t('moreDescription'),
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
          isHome={isHome}
          title={user.title}
        />
        <Box as="main">{children}</Box>
        {isHome && <Settings />}
      </Box>

    </>
  );
}

export default withRouter(LayoutWrapper);
