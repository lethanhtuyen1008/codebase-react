import { createTheme, ThemeOptions, PaletteOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';
import { IThemeOption } from './types';
import color from './colors';

const theme = () => {
  const themeOption: IThemeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.white,
    backgroundDefault: color.white,
    background: color.secondaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey900,
    textDark: color.grey900,
    divider: color.grey300,
  };

  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption) as PaletteOptions,
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    typography: themeTypography(themeOption) as TypographyOptions,
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
