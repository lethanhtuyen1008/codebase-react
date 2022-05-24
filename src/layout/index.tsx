import { Box } from '@mui/material';
import * as React from 'react';
import Scroll from 'react-custom-scrollbars';
import { LayoutProps } from './type';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { RouteName } from 'src/routers/routeName';
const Item = ({ label, route }: { label: string; route: string }) => {
  return (
    <Link to={route}>
      <Typography
        variant='h6'
        component='div'
        sx={{
          flexGrow: 1,
          textDecoration: 'none',
          marginRight: '30px',
          '.> a': {
            textDecoration: 'none',
          },
        }}
      >
        {label}
      </Typography>
    </Link>
  );
};
function Layout(props: LayoutProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
        }}
      >
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              zIndex: 100,
              backgroundColor: theme.palette.grey[300],
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position='static'>
                <Toolbar>
                  <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Item route={RouteName.CART} label='Cart' />
                  <Item route={RouteName.ABOUT} label='Abouts' />
                  <Item route={RouteName.PRODUCT} label='Product' />
                  <Item route={RouteName.LOGIN} label='Login' />
                  <Item route={RouteName.HOME} label='Home' />
                </Toolbar>
              </AppBar>
            </Box>
            <Scroll autoHide>
              <Box
                sx={{
                  padding: 1,
                }}
              >
                <Box sx={{ backgroundColor: 'common.white', padding: 2, borderRadius: '8px' }}>
                  {props.children}
                </Box>
              </Box>
            </Scroll>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
