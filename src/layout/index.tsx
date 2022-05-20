import { Box } from '@mui/material';
import * as React from 'react';
import Scroll from 'react-custom-scrollbars';
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
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              zIndex: 100,
              backgroundColor: theme.palette.grey[300],
            }}
          >
            123
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
