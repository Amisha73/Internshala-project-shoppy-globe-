import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Hook to extract URL parameters
import { Card, Button, Spinner } from "react-bootstrap"; 
import { useDispatch } from "react-redux"; // Hook to dispatch Redux actions
import { addToCart } from "../redux/actions"; // Redux action for cart

const ProductDetails = () => {
  // Extract the 'id' from the route parameters
  const { id } = useParams();
  
  // Redux dispatch function
  const dispatch = useDispatch();

  // Local state for tracking whether product is added to cart
  const [addedToCart, setAddedToCart] = useState(false);

  // Local state for product data
  const [product, setProduct] = useState(null);

  // State to manage loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details when the component mounts or when 'id' changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`); // API call
        const data = await response.json(); // Parse response
        setProduct(data); // Update product state
      } catch (err) {
        setError(err.message); // Catch and set any errors
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchProduct();
  }, [id]);

  // Show spinner while loading
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

  // Display error if fetch failed
  if (error) return <p>Error fetching product details.</p>;

  // Handler for Add to Cart button
  const handleAddToCart = () => {
    try {
      dispatch(addToCart({ ...product, quantity: 1 })); // Dispatch action with product and quantity
      setAddedToCart(true); // Update local state
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  // Calculate discounted price
  const discountedPrice = (
    product.price - product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="mx-auto lg-p-5 w-75 mb-5 ">
      <>
        <Card.Body>
          {/* Product Title */}
          <h3 className="p-3 text-center fw-bold fs-2 ">{product.title}</h3>

          {/* Layout: Image + Add to Cart + Product Info */}
          <div className="d-flex flex-md-row-reverse flex-column justify-content-around align-items-center gap-5 mb-5">
            <div>
              {/* Product Image */}
              <img
                src={product.images[0]}
                className="img-fluid mb-3 hover-zoom"
                role="button"
                width="600px"
                height="600px"
                alt={product.title}
              />

              {/* Add to Cart Button */}
              <Button
                variant="dark"
                onClick={handleAddToCart}
                className="w-100"
                disabled={addedToCart} // Disable after adding
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            </div>

            {/* Product Details Section */}
            <div className="d-flex flex-column">
              <p>
                <strong>Description:</strong> {product.description}
              </p>

              {/* Conditional rendering for optional fields */}
              {product.brand && (
                <p>
                  <strong>Brand:</strong> {product.brand}
                </p>
              )}

              {/* Price Display (with discount if available) */}
              <p className="card-text">
                {discountedPrice === product.price.toFixed(2) ? (
                  <span>
                    <strong>Price:</strong> ${product.price.toFixed(2)}
                  </span>
                ) : (
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

              {/* Additional Product Info */}
              <p>
                <strong>Availablility:</strong> {product.availabilityStatus}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>
                <strong>Rating:</strong> {product.rating}⭐
              </p>
              <p>
                <strong>Shipping Information:</strong>{" "}
                {product.shippingInformation}
              </p>
              <p>
                <strong>Refund Policy:</strong> {product.returnPolicy}
              </p>
            </div>
          </div>
        </Card.Body>
      </>

      {/* Reviews Section */}
      <h5>𝑹𝒆𝒗𝒊𝒆𝒘𝒔 :</h5>
      <div className="d-flex flex-column gap-3 mb-5">
        {product.reviews.map((review, index) => (
          <div key={index} className="card p-2 shadow">
            <div className="card-body d-flex justify-content-between">
              <div>
                {/* Reviewer's Name and Comment */}
                <h6 className="card-title">{review.reviewerName}</h6>
                <p className="card-text">{review.comment}</p>
              </div>
              <div>
                {/* Rating Badge */}
                <p className="card-text">
                  <span className="badge bg-success p-2">
                    {review.rating} ⭐
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
