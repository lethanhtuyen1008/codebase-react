import { Grid } from '@mui/material';
import React from 'react';
import BlogAbout from 'src/components/about/About';

const AboutPage = () => {
  const AboutData = [1, 2, 3];
  return (
    <Grid container spacing={2}>
      {AboutData.map((about) => (
        <Grid item sm={4} xs={12} key={about}>
          <BlogAbout />
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutPage;
