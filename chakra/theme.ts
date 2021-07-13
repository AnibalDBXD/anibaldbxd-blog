import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        margin: 0,
      },
    },
  },
});

export default theme;
