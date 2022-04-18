export interface IThemeOption {
  colors: any;
  heading: string;
  paper: string;
  backgroundDefault: string;
  background: string;
  darkTextPrimary: string;
  darkTextSecondary: string;
  textDark: string;
  divider: string;
}

import { Theme as MUITheme } from '@mui/material';
import colors from './colors';
import variables from './variables';
import styles from './styles';

export type AppColor = typeof colors;
export type AppVariable = typeof variables;
export type AppStyle = typeof styles;

export interface AppTheme extends MUITheme {
  colors: AppColor;
  variables: AppVariable;
  styles: AppStyle;
}
