import * as React from 'react';
import { Box, Typography } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';

const Star = () => {
  return <StarIcon sx={{ color: 'error.main', fontSize: '20px', marginBottom: '8px' }} />;
};

const CardProduct = ({
  name,
  image,
  price,
  discount,
}: {
  name: string;
  image: string;
  price: number;
  discount: number;
}) => {
  const [count, setCount] = React.useState(0);
  return (
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
          <Typography variant='body1'>{name}</Typography>
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
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
                borderRadius: '4px',
                padding: '0px 0px',
              },
            }}
          >
            <AddOutlinedIcon sx={{ color: 'primary.main' }} onClick={() => setCount(count + 1)} />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default CardProduct;
