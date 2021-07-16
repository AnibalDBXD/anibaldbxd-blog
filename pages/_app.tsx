import { ChakraProvider } from '@chakra-ui/react';
import '@9gustin/react-notion-render/dist/index.css';
import { withRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import LayoutWrapper from '../components/LayoutWrapper';
import PATHS from '../config/paths';
import theme from '../lib/chakra/theme';

function MyApp({ router, Component, pageProps }): JSX.Element {
  return (
    <ChakraProvider resetCSS={router.pathname !== PATHS.post} theme={theme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  );
}

export default withRouter(appWithTranslation(MyApp));
