import * as React from 'react';

import { Box, Container, Typography, Grid } from '@mui/material';

import CardProduct from 'src/components/product/CardProduct';
import SwipeableTextMobileStepper from 'src/components/dashboard/Slider';

const data = [
  {
    id: 1,
    name: 'Nike Court Zoom Vapor Cage',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    price: 20000,
    discount: 25,
  },
  {
    id: 2,
    name: 'Nike Court Zoom Vapor Cage',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75',
    price: 40000,
    discount: 15,
  },
  {
    id: 3,
    name: 'Nike Court Zoom Vapor Cage',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75',
    price: 60000,
    discount: 18,
  },
  {
    id: 4,
    name: 'Nike Court Zoom Vapor Cage',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75',
    price: 80000,
    discount: 28,
  },
];

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          background: 'common.white',
          width: { xs: 'calc(100vw - 32px)', sm: 'auto' },
        }}
      >
        <SwipeableTextMobileStepper />
      </Box>

      <Box sx={{ paddingTop: '40px', minHeight: 'auto', height: '990px' }}>
        <Typography variant='h2' component='div' sx={{ paddingBottom: '30px' }}>
          Flash Deals
        </Typography>

        <Grid container spacing={1}>
          {data.map((product, index) => (
            <Grid item xs={12} sm={3}>
              <CardProduct
                key={index}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discount}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default Home;
