import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Slider from 'react-slick';
import CardMedia from '@mui/material/CardMedia';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const itemData = [
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75',
    title: 'Bed',
  },
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=1920&q=75',
    title: 'Kitchen',
  },
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75',
    title: 'Sink',
  },
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75',
    title: 'Sink',
  },
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75',
    title: 'Sink',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const ListCategory = () => {
  return (
    <Slider {...settings}>
      {itemData.map((item) => (
        <Box
          sx={{
            width: '365px',
            height: '130px',
            borderRadius: '6px',
            p: 1.2,
          }}
        >
          <Card
            sx={{
              width: '100%',
              // border: (theme) => `solid 1px ${theme.palette.divider}`,
              background: '#fff',
              padding: '16px',
            }}
          >
            <CardMedia
              sx={{
                borderRadius: '6px',
              }}
              component='img'
              width='362'
              height='120'
              image={item.img}
              alt='Paella dish'
            />
          </Card>
        </Box>
      ))}
    </Slider>
  );
};
const Category = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, pt: 4 }}>
        <Typography variant='h2' component='div'>
          Top Categories
        </Typography>
        <Typography variant='h2' component='div'>
          View all
        </Typography>
      </Box>
      <Box>
        <ListCategory />
      </Box>
    </Container>
  );
};
export default Category;
