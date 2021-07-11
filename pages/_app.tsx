import { ChakraProvider } from '@chakra-ui/react';
import '@9gustin/react-notion-render/dist/index.css';
import LayoutWrapper from '../components/LayoutWrapper';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ChakraProvider>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
