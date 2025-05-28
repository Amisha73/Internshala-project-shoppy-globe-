// Import action types
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./actions";

// Initial state of the cart
const initialState = {
  items: [], // An array to hold products in the cart
};

/**
 * cartReducer -- Manages the cart state in the Redux store.
 * Handles adding items to the cart, removing them, and updating their quantities.
 * @param {Object} state - Current cart state
 * @param {Object} action - Redux action
 * @returns {Object} New state based on action type
 */
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add item to cart
    case ADD_TO_CART: {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // If item exists, increment the quantity
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // If item doesn't exist, add it to the cart with quantity = 1
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    // Remove item from cart
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    // Update item quantity in cart
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    // Return current state for any other actions
    default:
      return state;
  }
};

export default cartReducer;
