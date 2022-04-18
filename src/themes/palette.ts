/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

import { PaletteOptions } from '@mui/material';
import { IThemeOption } from './types';

export default function themePalette(theme: IThemeOption): PaletteOptions {
  return {
    mode: 'light',
    common: {
      black: theme.colors?.darkPaper,
    },
    primary: {
      100: theme.colors?.primary100,
      200: theme.colors?.primary200,
      300: theme.colors?.primary300,
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
    },
    secondary: {
      100: theme.colors?.secondary100,
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark,
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark,
    },
    success: {
      light: theme.colors?.successLight,
      200: theme.colors?.success200,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark,
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: theme.textDark,
      A700: theme.colors?.blackLight,
    },
    text: {
      primary: theme.textDark,
      secondary: theme.darkTextSecondary,
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault,
    },
    info: {
      main: theme.colors?.infoMain,
    },
    divider: theme.colors.divider,
  };
}
