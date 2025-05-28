import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem'; // Component to display individual cart item
import { removeFromCart, updateQuantity } from '../redux/actions'; // Redux actions

/**
 * Cart Component
 * --------------
 * Displays all items currently in the cart.
 * Allows users to remove items, update quantities, and proceed to checkout.
 */
const Cart = () => {
  const dispatch = useDispatch();
  // Fetch cart items from Redux store
  const cartItems = useSelector((state) => state.items);

  // handleRemove- Dispatches an action to remove an item from the cart using ID of the product to remove
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

    // handleQuantityChange - Dispatches an action to update the quantity of a cart item.
    // Prevents quantities less than 1. id - ID of the product and quantity - New quantity
  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity(id, quantity));
  };

  // totalPrice - Calculates the total cost of items in the cart.
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mb-5 py-5">
      <h1>Your Cart</h1>

      {/* Conditional rendering: check if cart is empty */}
      <div>
        {cartItems.length === 0 ? (
          // If cart is empty
          <p className="text-center">Your cart is empty.</p>
        ) : (
          // If cart has items, display each one
          <div className="d-flex flex-column gap-3">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => handleRemove(item.id)}
                onQuantityChange={(quantity) =>
                  handleQuantityChange(item.id, quantity)
                }
              />
            ))}
          </div>
        )}

        {/* Display total price of items in cart */}
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

        {/* Checkout button: only shows if cart has items */}
        {cartItems.length > 0 && (
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn btn-primary"
              onClick={() => window.location.href = '/checkout'} // Navigate to checkout page
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
