import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';

function ThemeToggler(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation('common');
  return (
    <IconButton
      aria-label={t('toggleThemeLabel')}
      border="0"
      color={`${colorMode === 'dark' ? 'white' : 'black'}`}
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      marginTop="20px"
      onClick={toggleColorMode}
    />
  );
}

export default ThemeToggler;
