import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import FlexDeals from 'src/components/dashboard/FlexDeals';
import SwipeableTextMobileStepper from 'src/components/dashboard/Slider';
import Category from 'src/components/dashboard/Category';
import TopRating from 'src/components/dashboard/TopRating';
import FeatureBrands from 'src/components/dashboard/FeaturedBrands';
import NewArrivals from 'src/components/dashboard/NewArrivals';
import Cars from 'src/components/dashboard/Cars';

const Home = () => {
  return (
    <Container disableGutters>
      <Box
        sx={{
          background: 'common.white',
          width: { xs: 'calc(100vw - 32px)', sm: 'auto' },
        }}
      >
        <SwipeableTextMobileStepper />
      </Box>

      <FlexDeals />
      <Category />

      <Box sx={{ marginBottom: '70px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <TopRating />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FeatureBrands />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginBottom: '70px' }}>
        <NewArrivals />
      </Box>

      <Box sx={{ marginBottom: '70px' }}>
        <Cars />
      </Box>
    </Container>
  );
};
export default Home;
