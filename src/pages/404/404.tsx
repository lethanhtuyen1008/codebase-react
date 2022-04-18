import { Box, CssBaseline, Typography, Button } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, withRouter } from 'react-router';
import { Image } from 'src/commons/images';
import { RouteName } from 'src/routers/routeName';
import useStyles from './style';

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = () => {
    history.push(RouteName.HOME);
  };

  return (
    <section className={classes.root}>
      <CssBaseline />

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
                src={Image._404}
                alt='404'
                width='235px'
                height='103px'
              />
            </Box>

            <Typography className={classes.textHeading} component='h1' variant='h2'>
              {t('oops! nothing was found')}
            </Typography>

            <Box component='p' my={3}>
              <Typography variant='h3'>
                {t(
                  'The page you are looking for might have been removed or it is temporarily unavailable',
                )}
              </Typography>
            </Box>

            <Box mt={4}>
              <Button onClick={handleClick} variant='contained' color='primary'>
                {t('Return to Home Page')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
export default withRouter(NotFound);
