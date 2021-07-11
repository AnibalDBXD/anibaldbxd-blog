export const NAVIGATOR_DARK_COMPARISION = '(prefers-color-scheme: dark)';

const isNavigatorDarkTheme = (): boolean => window.matchMedia(NAVIGATOR_DARK_COMPARISION).matches;

export default isNavigatorDarkTheme;
