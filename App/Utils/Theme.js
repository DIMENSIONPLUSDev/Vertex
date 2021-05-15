import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  dark: false,
  roundness: 0,

  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: "#F2BB1D",
    background: "#FFFFFF",
    card: "#F8F8F8",
    text: "#4d4d4d",
    border: "#FFFFFF",
    notification: "#F2BB1D",
    surface: "#F8F8F8",
    error: '#B00020',
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

export { CombinedDarkTheme, CombinedDefaultTheme };