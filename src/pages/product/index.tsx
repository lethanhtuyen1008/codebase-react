import React from 'react';
import ProductCard from 'src/components/product/ProductCard';
import { Grid } from '@mui/material';

const ProductPage = () => {
  const data = [1, 2, 3, 4];

  return (
    <Grid container spacing={2}>
      {data.map((product) => (
        <Grid item sm={3} xs={12} key={product}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductPage;
