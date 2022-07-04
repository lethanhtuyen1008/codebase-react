import { Box, Container } from '@mui/material';
import * as React from 'react';
import Slider from 'react-slick';
import SwipeableTextMobileStepper from 'src/components/dashboard/Slider';
import CardProduct from 'src/components/product/CardProduct';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
var settings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
};
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

      <Box>
        <Slider {...settings}>
          {data.map((item, index) => (
            <CardProduct
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
              discount={item.discount}
            />
          ))}
        </Slider>
      </Box>
    </Container>
  );
};
export default Home;
