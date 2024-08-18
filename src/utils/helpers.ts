export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const KEY_THEME = "theme";

export const getTheme = (): Theme => {
  const theme = localStorage.getItem(KEY_THEME) || Theme.LIGHT;
  return theme === Theme.DARK ? Theme.DARK : Theme.LIGHT;
};

export const setTheme = (theme: Theme) => {
  localStorage.setItem(KEY_THEME, theme);
};
