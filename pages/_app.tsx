import { ChakraProvider } from '@chakra-ui/react';
import '@9gustin/react-notion-render/dist/index.css';
import { withRouter } from 'next/router';
import LayoutWrapper from '../components/LayoutWrapper';
import PATHS from '../config/paths';

function MyApp({ router, Component, pageProps }): JSX.Element {
  return (
    <ChakraProvider resetCSS={router.pathname !== PATHS.post}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  );
}

export default withRouter(MyApp);
