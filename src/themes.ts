import night from './resources/night.jpg'
import dawn from './resources/dawn.jpg'
import day from './resources/day.jpg'


export type theme = {
  name: string;
  wallpaper:string;
  main: string;
  secondary: string;
};

const theme1: theme = {
  name: "Day",
  wallpaper: day,
  main: "#2E112D", //dark
  secondary: "#ffbe94", // light
};

const theme2: theme = {
  name: "Dawn",
  wallpaper :dawn,
  main: "#010705",
  secondary: "#DFDEFE",
};

const theme3: theme = {
  name: "Night",
  wallpaper: night,
  main: "#090D19",
  secondary: "#FFFCC9",
};

export const themeList = [theme1, theme2, theme3];
