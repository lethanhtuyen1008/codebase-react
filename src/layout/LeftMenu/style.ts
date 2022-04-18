import { AppTheme } from 'src/themes/types';
import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.appBar,
      height: '100%',
      width: '100%',
    },
  }),
);
