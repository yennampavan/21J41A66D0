import React from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, Stack } from '@mui/material';

const ProductFilter = ({ filter, setFilter }) => {
  return (
    <Stack spacing={2} direction="row" mb={2}>
      <FormControl fullWidth>
        <InputLabel>Company</InputLabel>
        <Select
          value={filter.company}
          onChange={(e) => setFilter({ ...filter, company: e.target.value })}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="AMZ">AMZ</MenuItem>
          <MenuItem value="FLP">FLP</MenuItem>
          <MenuItem value="SNP">SNP</MenuItem>
          <MenuItem value="MYN">MYN</MenuItem>
          <MenuItem value="AZO">AZO</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={filter.category}
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        >
          <MenuItem value="">All</MenuItem>
          {/* Add all categories here */}
          <MenuItem value="Laptop">Laptop</MenuItem>
          {/* Add other categories */}
        </Select>
      </FormControl>
      <TextField
        label="Min Price"
        type="number"
        value={filter.minPrice}
        onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
        fullWidth
      />
      <TextField
        label="Max Price"
        type="number"
        value={filter.maxPrice}
        onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={() => setFilter(filter)}>
        Apply Filters
      </Button>
    </Stack>
  );
};

export default ProductFilter;
