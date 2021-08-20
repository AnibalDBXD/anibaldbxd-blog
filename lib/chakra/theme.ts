import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { primaryColor } from './colors';

const theme = extendTheme({
  styles: {
    global: (props) => ({
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
      'a, :any-link': {
        color: mode('green.500', primaryColor.dark)(props),
      },
      /* Change nprogress colors */
      '#nprogress .bar': {
        background: primaryColor.dark,
      },
      '#nprogress .peg': {
        boxSshadow: `0 0 10px ${primaryColor.dark}, 0 0 5px ${primaryColor.dark}`,
      },
    }),
  },
  shadows: {
    outline: '0 0 0 3px rgba(103,210,145,0.6)',
  },
});

export default theme;
