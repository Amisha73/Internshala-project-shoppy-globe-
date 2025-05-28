import React from "react";
import { useNavigate } from "react-router-dom"; // Used for navigation to product detail page

/**
 * ProductItem Component
 * ---------------------
 * This component displays a single product in a card layout.
 * It includes an image, title, truncated description, and pricing with discount logic.
 * Clicking the card navigates the user to the product details page.
 *
 * Props:
 * - product: Object containing product data (id, title, price, discount, images, etc.)
 */

const ProductItem = ({ product }) => {
  // Initialize navigation hook from React Router
  const navigate = useNavigate();

  // Calculate the discounted price using the discount percentage and original price
  const discountedPrice = (
    product.price - product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  // showDetails function - Navigates the user to the product detail page using the product's ID.
  const showDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    // Card container with click handler for navigation
    <div
      className="card mb-4 d-flex shadow hover-overlay"
      onClick={showDetails} // Redirect to details page on click
      role="button" // Indicate card is clickable
    >
      {/* Product image (first image in the images array) */}
      <img
        src={product.images[0]}
        className="card-img-top w-50 mx-auto"
        alt={product.title}
      />

      {/* Card body content including title, description, and price */}
      <div className="card-body">
        {/* Product Title */}
        <h5 className="card-title overlay-content">{product.title}</h5>

        {/* Truncated Description (max 50 chars, adds ellipsis if longer) */}
        <p className="card-text small">
          {product.description.length >= 40
            ? product.description.substring(0, 50) + "..."
            : product.description}
        </p>

        {/* Price Section with Discount Display Logic */}
        <p className="card-text">
          {discountedPrice === product.price.toFixed(2) ? (
            // If no discount, show regular price
            <span>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </span>
          ) : (
            // If discounted, show original price striked and discounted price
            <>
              <strong> Price: </strong>
              <span className="text-decoration-line-through">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-danger ms-2">
                <strong> ${discountedPrice}</strong>
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
