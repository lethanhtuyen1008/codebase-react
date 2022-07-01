import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
// import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: 'https://bazar-react.vercel.app/assets/images/products/nike-black.png',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        autoPlay
        autoplay
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box sx={{ display: 'flex', padding: { xs: 1, sm: 4 } }}>
                <Box sx={{ paddingLeft: '24px' }}>
                  <Typography
                    variant='h1'
                    component='div'
                    sx={{ fontSize: '55px', lineHeight: '1.2', marginBottom: '22px' }}
                  >
                    50% Off For Your First Shopping
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    component='p'
                    sx={{ fontSize: '16px', marginBottom: '22px' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat
                    eu, quam etiam at quis ut convalliss.
                  </Typography>
                  <Typography component='a'>
                    <Button
                      variant='contained'
                      sx={{
                        borderRadius: '10px',
                        textTransform: 'capitalize',
                        color: 'common.white',
                        background: 'primary.main',
                      }}
                    >
                      Shop Now
                    </Button>
                  </Typography>
                </Box>
                <Box
                  component='img'
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                />
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
