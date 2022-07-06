import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
const RatingData = [
  {
    id: 1,
    name: 'Camera',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75',
    price: 300,
    evaluate: 49,
  },
  {
    id: 2,
    name: 'Camera',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fshoes-2.png&w=1920&q=75',
    price: 300,
    evaluate: 49,
  },
  {
    id: 3,
    name: 'Camera',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75',
    price: 300,
    evaluate: 49,
  },
  {
    id: 4,
    name: 'Camera',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fwatch-1.png&w=1920&q=75',
    price: 300,
    evaluate: 49,
  },
];

const Star = () => {
  return <StarIcon sx={{ color: 'error.main', fontSize: '20px' }} />;
};
const TopRating = () => {
  return (
    <Grid item xs={12} lg={6}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '35px',
        }}
      >
        <Typography variant='h2' component='div'>
          Top Ratings
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
        <Grid container spacing={2.7}>
          {RatingData.map((data, index) => (
            <Grid item xs={6} sm={6} md={3}>
              <Box>
                <CardMedia
                  sx={{
                    width: '118px',
                    height: '118px',
                    mb: 2,
                  }}
                  component='img'
                  image={data.image}
                  alt={data.name}
                />
              </Box>
              <Box textAlign='center'>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  component='span'
                  sx={{ mb: 0 }}
                >
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Typography>
                <Typography variant='h4' color='text.secondary' component='div' sx={{ mb: 1 }}>
                  {data.name}
                </Typography>
                <Typography variant='h4' color='text.secondary' component='div' sx={{}}>
                  {data.price}$
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Grid>
  );
};
export default TopRating;
