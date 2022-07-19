import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
const NewArrivalsData = [
  {
    id: 1,
    name: 'London Britches',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=1920&q=75',
    price: 350,
  },
  {
    id: 2,
    name: 'jim & Jago',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=1920&q=75',
    price: 350,
  },
  {
    id: 3,
    name: 'jim & Jago',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=1920&q=75',
    price: 350,
  },
  {
    id: 4,
    name: 'jim & Jago',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=1920&q=75',
    price: 350,
  },
  {
    id: 5,
    name: 'jim & Jago',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=1920&q=75',
    price: 350,
  },
  {
    id: 6,
    name: 'jim & Jago',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=1920&q=75',
    price: 350,
  },
];
const NewArrivals = () => {
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
          NewArrivals
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
        <Grid container spacing={1}>
          {NewArrivalsData.map((data, index) => (
            <Grid item xs={12} sm={6} md={2}>
              <Box key={index}>
                <CardMedia
                  sx={{
                    width: '180px',
                    height: '180px',
                    mb: 2,
                    borderRadius: '4px',
                    margin: { sm: 'auto', xs: 'auto' },
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
                <Typography variant='h4' color='text.secondary' component='div' sx={{ mb: 1 }}>
                  ${data.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};
export default NewArrivals;
