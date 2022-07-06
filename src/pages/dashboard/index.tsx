import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import FlexDeals from 'src/components/dashboard/FlexDeals';
import SwipeableTextMobileStepper from 'src/components/dashboard/Slider';
import Category from 'src/components/dashboard/Category';
import TopRating from 'src/components/dashboard/TopRating';
import FeatureBrands from 'src/components/dashboard/FeaturedBrands';

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
      <Box>
        <FlexDeals />
        <Category />
      </Box>
      <Box sx={{ p: 4 }}>
        <Container>
          <Grid container spacing={4}>
            <TopRating />
            <FeatureBrands />
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Home;
