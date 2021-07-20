import { extendTheme } from '@chakra-ui/react';
import { primaryColor } from './colors';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        margin: 0,
        '::-webkit-scrollbar': {
          width: '13px',
          height: '13px',
        },
        '::-webkit-scrollbar-thumb': {
          background: primaryColor.dark,
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: primaryColor.light,
        },
        '::-webkit-scrollbar-track': {
          background: 'white',
          borderRadius: '10px',
          boxShadow: 'inset 7px 10px 12px 0px white.50',
        },
      },
    },
  },
});

export default theme;
