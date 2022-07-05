import * as React from 'react';
import { Box, Container } from '@mui/material';
import FlexDeals from 'src/components/dashboard/FlexDeals';
import SwipeableTextMobileStepper from 'src/components/dashboard/Slider';
import Category from 'src/components/dashboard/Category';

const Home = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            background: 'common.white',
            width: { xs: 'calc(100vw - 32px)', sm: 'auto' },
          }}
        >
          <SwipeableTextMobileStepper />
        </Box>
      </Container>
      <Box sx={{ background: '#e9f4ff' }}>
        <FlexDeals />
        <Category />
      </Box>
    </>
  );
};
export default Home;
