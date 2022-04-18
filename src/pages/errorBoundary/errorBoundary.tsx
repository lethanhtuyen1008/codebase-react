import { Box, createStyles, CssBaseline, Typography, Button } from '@mui/material';
import { WithStyles, withStyles } from '@mui/styles';
import * as React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Image } from 'src/commons/images';
import { RouteName } from 'src/routers/routeName';
import { State } from './types';

class ErrorBoundary extends React.Component<
  WithTranslation & RouteComponentProps<any> & WithStyles<typeof useStyles>,
  State
> {
  state = {
    error: '',
    errorInfo: {
      componentStack: null,
    },
  };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { t, classes, history } = this.props;

    const handleClick = () => {
      history.push(RouteName.HOME);
    };

    if (this.state.errorInfo.componentStack) {
      // Error path
      return (
        <section className={classes.root}>
          <CssBaseline />
          <Box className={classes.logo}>LOGO</Box>

          <Box className={classes.box}>
            <Box className={classes.boxInner}>
              <Box textAlign='center' p={5} className={classes.boxInfo}>
                <img
                  className={classes.imgRain}
                  src={Image.RAIN}
                  alt='RAIN'
                  width='200px'
                  height='200px'
                />

                <Box mb={4}>
                  <img
                    className={classes.img404}
                    src={Image._500}
                    alt='404'
                    width='235px'
                    height='103px'
                  />
                </Box>

                <Typography className={classes.textHeading} component='h1' variant='h2'>
                  {t('Sorry... Something went wrong :')}
                </Typography>

                <Box component='p' mt={3}>
                  {t(
                    'We are experiencing an internal server problem and cannot full fill the request right not.',
                  )}
                </Box>
                <Box component='p'>
                  {t('Please try to refresh this page or fell free to contact us for help.')}
                </Box>

                <details>
                  <Typography color='error'>
                    {' '}
                    {this.state.error && this.state.error.toString()}{' '}
                  </Typography>
                  <br />
                  <span>{this.state.errorInfo.componentStack}</span>
                </details>

                <Box mt={4}>
                  <Button onClick={handleClick} variant='contained' color='secondary'>
                    {t('Tell Us about This Error')}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

const useStyles = (theme: any) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
  });

export default withStyles(useStyles, { withTheme: true })(
  withTranslation()(withRouter(ErrorBoundary)),
);
