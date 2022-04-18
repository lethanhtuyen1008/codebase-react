import { Box } from '@mui/material';
import * as React from 'react';
import Scroll from 'react-custom-scrollbars';
import { Constant } from 'src/commons/constant';
import { Image } from 'src/commons/images';
import Navigator from 'src/layout/LeftMenu';
import Account from './Account/account';
import { LayoutProps } from './type';
import { useTheme } from '@mui/material/styles';

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
        <Box sx={{ color: 'grey300', display: 'flex' }}>
          <Box
            sx={{
              alignSelf: 'center',
              backgroundColor: 'white',
              height: '70px',
              display: 'flex',
              borderBottom: `solid 1px ${theme.palette.divider}`,
              color: 'darkPrimary800',
              textAlign: 'center',
              width: '300px',
            }}
          >
            <Box
              src={Image.LOGO}
              width={Constant.WIDTH_LOGO}
              height={Constant.HEIGHT_LOGO}
              component='img'
              sx={{
                margin: 'auto',
              }}
            />
          </Box>
          <Box
            sx={{
              height: '70px',
              display: 'flex',
              background: theme.palette.primary.dark,
              width: '100%',
              boxShadow: `0 2px 4px 0 grey300, 0 1px 3px 0 grey300`,
            }}
          >
            <Box
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'none',
                alignSelf: 'center',
                paddingRight: '32px',
                marginLeft: 'auto',
                [theme.breakpoints.down('xs')]: {
                  display: 'none',
                },
              }}
            >
              <Account />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box
            sx={{
              borderRight: `solid 1px ${theme.palette.grey[300]}`,
              backgroundColor: theme.palette.common.white,
              height: '100%',
              width: '300px',
            }}
          >
            <Navigator />
          </Box>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              zIndex: 100,
              backgroundColor: theme.palette.grey[300],
            }}
          >
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
