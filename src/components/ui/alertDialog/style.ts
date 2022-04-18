import { makeStyles, createStyles } from '@mui/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    dialogPaper: {
      overflowY: 'inherit',
      borderRadius: 8,
      marginBottom: 0,
    },
    paperWidthXs: {
      maxWidth: 400,
    },
    middle: {
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
      },
    },
    dialogTitleRoot: {
      '& > h2': {
        color: 'inherit',
      },
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(30 / 8, 6, 12 / 8),
      },
    },
    dialogContentRoot: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 6, 4),
      },
    },
    dialogContentText: {
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(3),
      },
    },
    button: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(12 / 8, 20 / 8),
      fontSize: 10,
    },
    errorMessage: {
      marginTop: theme.spacing(-3),
      marginBottom: theme.spacing(4),
    },
    gridContainer: {
      marginTop: theme.spacing(-3),
    },
  }),
);
