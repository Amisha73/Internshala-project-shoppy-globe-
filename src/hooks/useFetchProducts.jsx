import { useEffect, useState } from 'react';

/**
 * useFetchProducts Hook ----- A reusable custom hook that fetches a list of products from an API.
 * Manages loading, error, and product state internally.
 * @returns {Object} { products, loading, error }
 */
const useFetchProducts = () => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  // State to manage loading state of API call
  const [loading, setLoading] = useState(true);

  // State to capture any error during fetch
  const [error, setError] = useState(null);

  // useEffect to fetch products when component mounts
  useEffect(() => {
    // fetchProducts---- Asynchronously fetches product data from the API and updates state.
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products'); // API call
        const data = await response.json(); // Parse JSON
        setProducts(data.products); // Store product data
      } catch (err) {
        setError(err.message); // Store error message
      } finally {
        setLoading(false); // Set loading to false regardless of success/failure
      }
    };

    fetchProducts(); // Call fetch on component mount
  }, []); // Empty dependency array ensures it runs once

  // Return products, loading and error states to the component that uses this hook
  return { products, loading, error };
};

export default useFetchProducts;
