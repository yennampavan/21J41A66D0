import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Stack, Chip } from '@mui/material';
import { getTopProducts } from '../api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      // You need to fetch product details by ID. 
      // Adjust API or mock data accordingly.
      const allProducts = await getTopProducts('', '', 100, 0, 100000);
      const productDetails = allProducts.find(p => p.id === id);
      setProduct(productDetails);
    };

    fetchProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`https://via.placeholder.com/300?text=${product.name}`} // Random image URL
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
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
    </div>
  );
};

export default ProductDetails;
