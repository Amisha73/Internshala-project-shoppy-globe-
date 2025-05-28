import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Hook to access current route's location and search params
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts"; // Custom hook to fetch all products

/**
 * SearchResults Component ----- This component displays products that match a search query from the URL.
 * It reads the search query from the URL, filters products accordingly, and displays them.
 */
const SearchResults = () => {
  const location = useLocation(); // Access location object which includes query string
  const [results, setResults] = useState([]); // State to hold filtered search results
  const { products } = useFetchProducts(); // Fetch the full list of products using a custom hook

  // Extract the 'query' parameter from the URL
  const query = new URLSearchParams(location.search).get("query");

  //  useEffect Hook - Runs whenever the `query` changes.
  //  Filters the product list to include only those whose titles match the query.
  useEffect(() => {
    if (query) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredProducts); // Update state with matching results
    }
  }, [query]);

  return (
    <div className="container p-4">
      {/* Display the current search query */}
      <h2>Search Results for: "{query}"</h2>

      {/* Grid layout for search results */}
      <div className="row mt-4">
        {results.length > 0 ? (
          // If matching results exist, display each in a column using ProductItem
          results.map((product) => (
            <div className="col-md-4" key={product.id}>
              <ProductItem product={product} />
            </div>
          ))
        ) : (
          // Display fallback message when no results are found
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
