import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
const FeatureBrands = () => {
  return (
    <Grid item xs={12} lg={6}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <Typography variant='h2' component='div'>
          FeaturedBrands
        </Typography>
        <Typography variant='h5' component='div'>
          View all
        </Typography>
      </Box>
    </Grid>
  );
};
export default FeatureBrands;
