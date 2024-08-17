import React from 'react';
import { Card, CardContent, Typography, CardMedia, Chip, Stack } from '@mui/material';

const ProductCard = ({ product }) => {
  if (!product) {
    return null; // Handle missing product data
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://via.placeholder.com/150?text=${product.name}`} // Random image URL
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography color="text.secondary">
          {product.company} - {product.category}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Price: ${product.price}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={`Rating: ${product.rating}`} />
          <Chip label={`Discount: ${product.discount}%`} />
          <Chip label={`Available: ${product.availability ? 'Yes' : 'No'}`} color={product.availability ? 'success' : 'error'} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
