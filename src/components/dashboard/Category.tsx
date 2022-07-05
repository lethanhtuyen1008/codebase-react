import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
            borderRadius: '4px',
          }}
        >
          <ImageListItem key={item.img} sx={{ borderRadius: '4px' }}>
            <img src={item.img} alt={item.title} loading='lazy' />
          </ImageListItem>
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
