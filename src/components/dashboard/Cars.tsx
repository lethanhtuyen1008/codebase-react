import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
const dataCars = [
  {
    id: 1,
    name: 'Lord 2019',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    discount: 25,
    price: 20000,
  },
  {
    id: 2,
    name: 'Lord 2019',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    discount: 25,
    price: 20000,
  },
  {
    id: 3,
    name: 'Lord 2019',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    discount: 25,
    price: 20000,
  },
  {
    id: 4,
    name: 'Lord 2019',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    discount: 25,
    price: 20000,
  },
  {
    id: 5,
    name: 'Lord 2019',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    discount: 25,
    price: 20000,
  },
  {
    id: 6,
    name: 'Lord 2019',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    discount: 25,
    price: 20000,
  },
  {
    id: 7,
    name: 'Lord 2019',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    discount: 25,
    price: 20000,
  },
  {
    id: 8,
    name: 'Lord 2019',
    image:
      'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75',
    discount: 25,
    price: 20000,
  },
];
const Cars = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h2' component='div'>
          Product home
        </Typography>
        <Typography variant='h2' component='div'>
          View All
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {dataCars.map((cars, index) => (
          <Grid item lg={3} xs={12} sm={6} key={index}>
            <Card sx={{ border: (theme) => `solid 1px ${theme.palette.divider}` }}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label='recipe'
                    sx={{
                      borderRadius: '16px',
                      fontSize: '12px',
                      width: '65px',
                      height: '25px',
                    }}
                  >
                    {cars.discount}% off
                  </Avatar>
                }
                action={
                  <IconButton aria-label='settings'>
                    <FavoriteBorderIcon />
                  </IconButton>
                }
              />
              <CardMedia component='img' height='194' image={cars.image} alt='Paella dish' />
              <CardContent
                sx={{
                  '&:last-child': {
                    paddingBottom: '15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body1'>{cars.name}</Typography>
                  {/* <Typography variant='subtitle1' color='text.secondary' component='span'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Typography> */}
                  <Typography
                    variant='subtitle1'
                    component='p'
                    sx={{ display: 'flex', lineHeight: '0' }}
                  >
                    {cars.price}$ $1000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: ' flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}
                >
                  <Typography
                    component='button'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'transparent',
                      border: '0',
                      width: '28px',
                      height: '28px',
                      cursor: 'pointer',
                      ':hover': {
                        border: (theme) => `1px solid ${theme.palette.primary.main}`,
                        borderRadius: '4px',
                        padding: '0px 0px',
                      },
                    }}
                  >
                    <RemoveOutlinedIcon
                      sx={{
                        color: 'primary.main',
                      }}
                    />
                  </Typography>
                  {/* <Typography
                      component='span'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '3px',
                      }}
                    >
                      {count}
                    </Typography> */}
                  {/* <Typography
                      component='button'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        border: '0',
                        width: '28px',
                        height: '28px',
                        cursor: 'pointer',
                        marginTop: '3px',
                        ':hover': {
                          border: (theme) => `1px solid ${theme.palette.primary.main}`,
                          borderRadius: '4px',
                          padding: '0px 0px',
                        },
                      }}
                    >
                      <AddOutlinedIcon
                        sx={{ color: 'primary.main' }}
                        onClick={() => setCount(count + 1)}
                      />
                    </Typography> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Cars;
