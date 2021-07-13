import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function ThemeToggler(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label={`Change ${colorMode} mode`}
      border="0"
      color={`${colorMode === 'dark' ? 'white' : 'black'}`}
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
}

export default ThemeToggler;
