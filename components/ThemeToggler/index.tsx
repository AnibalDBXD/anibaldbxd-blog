import { useEffect, useState } from 'react';
import { THEMES, THEME_KEY, THEMES_LABELS } from './constants';
import isNavigatorDarkTheme from '../../utils/isNavigatorDarkTheme';

import styles from './styles.module.scss';

function ThemeToggler(): JSX.Element {
  const [selectedTheme, setTheme] = useState('light');

  const handleChangeTheme = (): void =>
    setTheme(THEMES[Object.keys(THEMES).find((theme) => THEMES[theme] !== selectedTheme)]);

  const actualTheme = (): string => localStorage.getItem(THEME_KEY);

  useEffect(() => {
    setTheme(actualTheme() || (isNavigatorDarkTheme() ? THEMES.DARK : THEMES.LIGHT));
  }, []);

  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem(THEME_KEY, selectedTheme);
      if (selectedTheme === THEMES.DARK) {
        document.body.classList.add(THEMES.DARK);
      } else {
        document.body.classList.remove(THEMES.DARK);
      }
    }
  }, [selectedTheme]);

  return (
    <button className={styles.button} onClick={handleChangeTheme} type="button">
      {THEMES_LABELS[selectedTheme]}
    </button>
  );
}

export default ThemeToggler;
