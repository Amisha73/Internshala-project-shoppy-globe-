import React, { useState } from "react";
import ProductItem from "./ProductItem"; // Component to display individual product
import useFetchProducts from "../hooks/useFetchProducts"; // Custom hook to fetch products
import { Spinner, Button } from "react-bootstrap"; 

/**
 * ProductList Component
 * ---------------------
 * This component is responsible for displaying a list of products.
 * It fetches product data using a custom hook, displays a loading spinner,
 * allows category filtering, and renders a grid of ProductItem components.
 */
const ProductList = () => {
  // Destructure returned values from the custom hook
  const { products, loading, error } = useFetchProducts();

  // State to manage the currently selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories to filter products by 
  const categories = ["All", "beauty", "fragrances", "furniture", "groceries"];

  /**
   * Filter products by selected category
   * - If "All" is selected, return all products
   * - Otherwise, return only products matching the selected category
   */
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") {
      return true;
    }
    return product.category === selectedCategory;
  });

  // Show loading spinner while fetching products
  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center fs-4"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        Loading...
      </div>
    );
  // Display error message if fetching products fails
  if (error) return <p>Error fetching products.</p>;

  return (
    <div className="container mt-5 mb-5">
      {/* Category Filter Buttons */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="dark"
            className="mb-3"
            onClick={() => setSelectedCategory(category)} // Set selected category on button click
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 col-sm-6" key={product.id}>
            {/* Render ProductItem component for each product */}
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
