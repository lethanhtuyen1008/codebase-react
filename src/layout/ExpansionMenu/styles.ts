import { makeStyles, createStyles } from '@mui/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      width: '100%',
      borderBottom: `solid 1px ${theme.palette.grey[300]}`,
    },
    icon: {
      fontSize: 24,
      color: theme.palette.grey[600],
    },
    containerIcon: {
      paddingTop: 2,
      paddingRight: 10,
    },
    header: {
      alignItems: 'center',
      display: 'flex',
      width: '100%',
    },
    switch: {
      marginLeft: 'auto',
    },
    title: {
      display: 'flex',
      width: '100%',
    },
    content: {
      paddingLeft: 22,
      paddingRight: 22,
      paddingBottom: 4,
      marginTop: -8,
    },
    label: {
      display: 'flex',
      paddingLeft: 8,
      fontWeight: 600,
      textTransform: 'uppercase',
      fontSize: 12,
      whiteSpace: 'nowrap',
    },
    active: {
      backgroundColor: theme.palette.grey[300],
    },
    border: {
      borderBottom: `solid 1px ${theme.palette.grey[300]}`,
    },
    defaultActive: {},
    defaultActiveText: {
      color: 'primaryMain',
    },
  }),
);
