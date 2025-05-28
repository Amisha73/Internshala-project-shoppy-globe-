import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Routing utilities
import { FaSearch } from "react-icons/fa"; // Search icon
import { useSelector } from "react-redux"; // Hook to access Redux store

/**
 * Header Component
 * ----------------
 * Renders the navigation bar of the application.
 * Includes responsive design with a sidebar for small screens,
 * links to other pages, search functionality, and cart icon with item count.
 */
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility
  const navigate = useNavigate(); // Navigation hook

  // Toggles sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Retrieve cart items from Redux store
  const cartItems = useSelector((state) => state.items);
  const cartCount = cartItems.length; // Total items in the cart

  // handleSearch - Handles the form submission for search.
  // Navigates to the SearchResults page with the search query in URL.
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission
    const query = event.target.elements.search.value.trim(); // Get input value
    if (query) {
      navigate(`/search?query=${query}`); // Redirect to search results page
    }
  };

  return (
    <header className="bg-dark text-white p-3">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <h1 className="h4">
          <Link to="/" className="text-white text-decoration-none">
            𝒮𝒽ℴ𝓅𝓅𝓎𝒢𝓁ℴ𝒷ℯ
          </Link>
        </h1>

        {/* Hamburger menu icon for small screens */}
        <div className="d-lg-none cursor-pointer" onClick={toggleSidebar}>
          ☰
        </div>

        {/* Sidebar Navigation for Small Screens */}
        {isSidebarOpen && (
          <div
            className="sidebar position-fixed top-0 start-0 bg-dark text-white p-4"
            style={{ width: "250px", height: "100%", zIndex: 1000 }}
          >
            {/* Sidebar Logo */}
            <h1 className="h4 mb-5">
              <Link to="/" className="text-white text-decoration-none">
                𝒮𝒽ℴ𝓅𝓅𝓎𝒢𝓁ℴ𝒷ℯ
              </Link>
            </h1>

            {/* Sidebar Navigation Links */}
            <nav className="d-flex flex-column gap-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white" onClick={toggleSidebar}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white" onClick={toggleSidebar}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link text-white" onClick={toggleSidebar}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link text-white" onClick={toggleSidebar}>
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/checkout" className="nav-link text-white" onClick={toggleSidebar}>
                    Checkout
                  </Link>
                </li>
                <Link to="/loginSignup" className="nav-link text-white" onClick={toggleSidebar}>
                  Login
                </Link>
              </ul>
            </nav>
          </div>
        )}

        {/* Top Navbar for Large Screens */}
        <div className="d-none d-xxl-block d-xl-block d-lg-block">
          <nav className="d-flex gap-5">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link text-white">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/checkout" className="nav-link text-white">Checkout</Link>
              </li>
            </ul>

            {/* Search Input */}
            <form className="input-group w-auto" onSubmit={handleSearch}>
              <input
                type="search"
                name="search"
                className="form-control"
                placeholder="Search products name..."
              />
              <span className="input-group-text" id="search-addon">
                <FaSearch />
              </span>
            </form>
          </nav>
        </div>

        {/* Cart and Login Section (visible on large screens only) */}
        <div className="d-none d-xxl-block d-xl-block d-lg-block">
          <div className="d-flex gap-5 me-3">
            {/* Cart Icon with Item Count Badge */}
            <div className="position-relative">
              <Link to="/cart" className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-cart"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M6.5 0a.5.5 0 0 1 .5.5V1h10V.5a.5.5 0 0 1 1 0V1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1.5l-1.5 7H7.5l-1.5-7H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5V.5a.5.5 0 0 1 .5-.5zM1 3v1h1.5l1.5 7h8l1.5-7H20V3H1zm5 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                {/* Item count badge */}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              </Link>
            </div>

            {/* Login Button */}
            <Link to="/loginSignup" className="nav-link text-white" role="button">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
