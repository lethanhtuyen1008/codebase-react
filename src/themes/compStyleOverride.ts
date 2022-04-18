import { Components } from '@mui/material';
import { IThemeOption } from './types';

export default function componentStyleOverrides(theme: IThemeOption): Components | undefined {
  const bgColor = theme.colors?.paper;

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '24px',
          lineHeight: 1,
        },
        sizeMedium: {
          padding: '18px 32px',
        },
        sizeSmall: {
          padding: '8px 16px',
        },
        outlinedPrimary: {
          backgroundColor: theme.colors?.paper,
          borderWidth: '1.5px',

          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: theme.colors?.primaryLight,
          },
        },
        containedPrimary: {
          backgroundColor: theme.colors?.primaryMain,
          color: theme.colors?.white,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          left: 15,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: '30px',

          '& legend': {
            marginLeft: 15,
          },

          '& fieldset': {
            borderWidth: 2,
            borderColor: 'transparent',
            borderRadius: '30px',
          },
          '&:hover fieldset': {
            borderColor: `${theme.colors?.black} !important`,
          },
          '&.Mui-focused fieldset': {
            borderColor: `${theme.colors?.black} !important`,
          },
        },
        input: {
          padding: '14.5px 14px',
        },
        notchedOutline: {},
      },
    },
    MuiRating: {
      defaultProps: {
        precision: 0.1,
      },
    },
  };
}
