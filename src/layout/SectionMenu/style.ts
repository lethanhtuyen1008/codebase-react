import { makeStyles, createStyles } from '@mui/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      color: theme.colors.grey600,
      borderBottom: `solid 1px grey300`,
      borderTop: `solid 1px grey300`,
      height: 70,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 20,
      fontSize: 16,
    },
    section: {
      fontWeight: 400,
    },
  }),
);
