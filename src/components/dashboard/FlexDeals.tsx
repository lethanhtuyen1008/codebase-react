import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import CardProduct from 'src/components/product/CardProduct';
import Slider from 'react-slick';

const FlexDealsdata = [
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
  {
    id: 5,
    name: 'Nike Court Zoom Vapor Cage',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75',
    price: 80000,
    discount: 28,
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FlexDeals = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, pt: 4 }}>
        <Typography variant='h2' component='div'>
          Flash Deals
        </Typography>
        <Typography variant='h2' component='div'>
          View all
        </Typography>
      </Box>

      <Box
        sx={{
          width: {
            xs: 'calc(100vw - 32px)',
            sm: 'calc(100vw - 32px)',
            md: 'calc(100vw - 32px)',
            lg: 'auto',
          },
          mg: { md: 'auto' },
        }}
      >
        <Slider {...settings}>
          {FlexDealsdata.map((item, index) => (
            <Box>
              <CardProduct
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
                discount={item.discount}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};
export default FlexDeals;
