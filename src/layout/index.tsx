import * as React from 'react';

import { Box } from '@mui/material';

import { LayoutProps } from './type';
import Header from './Header';

function Layout(props: LayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        margin: 'auto',
        backgroundColor: 'common.white',
        height: '2000px',
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
        <Box
          sx={{
            height: '100%',
            width: '100%',
            zIndex: 100,
            position: 'relative',
          }}
        >
          <Box sx={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
            <Header />
          </Box>

          <Box sx={{ marginTop: '180px', minHeight: '100vh' }}>{props.children}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
