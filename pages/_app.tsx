import '@9gustin/react-notion-render/dist/index.css';
import LayoutWrapper from '../components/LayoutWrapper';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
