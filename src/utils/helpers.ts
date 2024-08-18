export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const KEY_THEME: string = "theme";
export const EVENT_TOGGLE_THEME: string = "toggleTheme";

export const getTheme = (): Theme => {
  const theme: String = localStorage.getItem(KEY_THEME) || Theme.LIGHT;
  return theme === Theme.DARK ? Theme.DARK : Theme.LIGHT;
};

export const setTheme = (theme: Theme) => {
  localStorage.setItem(KEY_THEME, theme);
};
