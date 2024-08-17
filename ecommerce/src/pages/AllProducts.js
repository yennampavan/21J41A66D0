import React, { useEffect, useState } from 'react';
import { Grid, Typography, Pagination } from '@mui/material';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { getTopProducts } from '../api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    company: '',
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    topN: 10
  });
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      console.log('Applying filters:', filter); // Debugging statement
      const fetchedProducts = await getTopProducts(
        filter.company,
        filter.category,
        filter.topN,
        filter.minPrice,
        filter.maxPrice
      );
      console.log('Fetched Products:', fetchedProducts); // Debugging statement
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [filter]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      <ProductFilter filter={filter} setFilter={setFilter} />
      <Grid container spacing={2}>
        {paginatedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(products.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </div>
  );
};

export default AllProducts;
