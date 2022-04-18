import { AppTheme } from 'src/themes/types';
import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    icon: {
      fontSize: 26,
    },
    name: {
      textTransform: 'uppercase',
    },
    chip: {
      backgroundColor: 'black',
      borderRadius: 8,
    },
  }),
);
