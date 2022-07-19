import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
const FeaturedData = [
  {
    id: 1,
    name: 'London Britches',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=1920&q=75',
  },
  {
    id: 2,
    name: 'jim & Jago',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fjim%20and%20jiko.png&w=1920&q=75',
  },
];
const FeatureBrands = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '35px',
        }}
      >
        <Typography variant='h2' component='div'>
          FeaturedBrands
        </Typography>
        <Typography variant='h5' component='div'>
          View all
        </Typography>
      </Box>
      <Card
        sx={{
          width: '100%',
          background: 'common.white',
          p: 2,
          display: 'flex',
        }}
      >
        <Grid container spacing={{ xs: 3, sm: 2 }}>
          {FeaturedData.map((data, index) => (
            <Grid item xs={12} sm={6} md={6}>
              <Box key={index}>
                <CardMedia
                  sx={{
                    width: '268px',
                    height: '180px',
                    mb: 2,
                    borderRadius: '4px',
                    margin: { sm: 'auto' },
                  }}
                  component='img'
                  image={data.image}
                  alt={data.name}
                />
              </Box>
              <Box textAlign='center'>
                <Typography variant='h4' color='text.secondary' component='div' sx={{ mb: 1 }}>
                  {data.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};
export default FeatureBrands;
