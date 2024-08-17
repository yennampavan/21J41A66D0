import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies';

export const getTopProducts = async (company, category, topN, minPrice, maxPrice) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/${company}/categories/${category}/products`,
      { params: { top: topN, minPrice, maxPrice } }
    );
    console.log('API Response:', response.data); // Debugging statement
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
