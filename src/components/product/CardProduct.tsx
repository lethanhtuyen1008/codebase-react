import * as React from 'react';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useState } from 'react';

const Star = () => {
  return <StarOutlineIcon sx={{ color: 'error.main', fontSize: '20px', marginBottom: '8px' }} />;
};

const CardProduct = ({
  name,
  image,
  price,
  discount,
}: {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
}) => {
  const [count, setCount] = useState(0);
  return (
    <Grid xs={3}>
      <Card sx={{ maxWidth: 320, boxShadow: '0px 1px 3pxrgba(3, 0, 71, 0.09)', width: '290px' }}>
        <CardHeader
          sx={{ backgroundColor: '#fff' }}
          avatar={
            <Avatar
              aria-label='recipe'
              sx={{
                background: '#D23F57',
                borderRadius: '16px',
                fontSize: '12px',
                width: '65px',
                height: '25px',
              }}
            >
              {discount}% off
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <FavoriteBorderIcon />
            </IconButton>
          }
        />
        <CardMedia component='img' height='194' image={image} alt='Paella dish' />
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
            <Typography variant='h3' sx={{ mb: 1, fontSize: '14px', color: '#373F50' }}>
              {name}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary' component='span'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </Typography>
            <Typography variant='subtitle1' component='p' sx={{ display: 'flex', lineHeight: '0' }}>
              {price}$ $1000
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
                  border: '1px solid #D23F57',
                  borderRadius: '4px',
                  padding: '0px 0px',
                },
              }}
            >
              <RemoveOutlinedIcon sx={{ color: '#D23F57', fontSize: '1.25rem' }} />
            </Typography>
            <Typography
              component='span'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '3px',
              }}
            >
              {count}
            </Typography>
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
                marginTop: '3px',
                ':hover': {
                  border: '1px solid #D23F57',
                  borderRadius: '4px',
                  padding: '0px 0px',
                },
              }}
            >
              <AddOutlinedIcon
                sx={{ color: '#D23F57', fontSize: '1.25rem' }}
                onClick={() => setCount(count + 1)}
              />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CardProduct;
