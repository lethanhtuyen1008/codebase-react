import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import * as React from 'react';
import Slider from 'react-slick';
const itemData = [
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75',
    title: 'Headphone',
    description: '3k Oders this week',
  },
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=1920&q=75',
    title: 'Headphone',
    description: '3k Oders this week',
  },
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75',
    title: 'Headphone',
    description: '3k Oders this week',
  },
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75',
    title: 'Headphone',
    description: '3k Oders this week',
  },
  {
    img:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75',
    title: 'Headphone',
    description: '3k Oders this week',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
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
const ListCategory = () => {
  return (
    <Box
      sx={{
        width: {
          xs: 'calc(100vw - 48px)',
          sm: 'calc(100vw - 48px)',
          md: 'calc(100vw - 48px)',
          lg: 'auto',
        },
      }}
    >
      <Slider {...settings}>
        {itemData.map((item) => (
          <Box
            sx={{
              width: '365px',
              height: '130px',
              borderRadius: '6px',
              // p: 1.2,
            }}
          >
            <Card
              sx={{
                width: '100%',
                // border: (theme) => `solid 1px ${theme.palette.divider}`,
                background: '#fff',
                padding: '16px',
                position: 'relative',
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
              <Chip
                label={item.title}
                sx={{
                  position: 'absolute',
                  top: '25px',
                  left: '30px',
                  fontSize: '10px',
                  height: '24px',
                  background: '#0F3460',
                  color: 'common.white',
                }}
              />
              <Chip
                label={item.description}
                sx={{
                  position: 'absolute',
                  top: '25px',
                  right: '30px',
                  fontSize: '10px',
                  height: '24px',
                  background: 'common.white',
                  color: 'black',
                }}
              />
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
const Category = () => {
  return (
    <Box sx={{ marginBottom: '70px' }}>
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
    </Box>
  );
};
export default Category;
