import { makeStyles, createStyles } from '@mui/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
    },
    logo: {
      position: 'fixed',
      top: 50,
      left: 50,
      zIndex: theme.zIndex.mobileStepper,
      '& img': {
        maxWidth: 200,
      },
      [theme.breakpoints.down('sm')]: {
        top: 20,
        left: 20,
        '& img': {
          maxWidth: 120,
        },
      },
    },
    box: {
      maxHeight: 'calc(100% - 64px)',
      overflowY: 'auto',
      width: '100%',
    },
    boxInner: {
      position: 'relative',
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 70,
      [theme.breakpoints.up('xs')]: {
        maxWidth: 800,
        margin: '0 auto',
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
      },
    },
    boxInfo: { position: 'relative' },
    imgRain: {
      position: 'absolute',
      zIndex: 0,
      top: 0,
      left: '50%',
      transform: 'translate(-15%, -40%)',
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
        marginBottom: 0,
      },
    },
    img404: {
      position: 'relative',
      zIndex: 1,
    },
    textHeading: {
      textTransform: 'uppercase',
    },
  }),
);
