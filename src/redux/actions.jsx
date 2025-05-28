// Action Types --
// These constants represent the types of actions that can be dispatched.
// Using constants prevents typos and makes it easier to manage actions.
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Action Creators ---Each action creator returns an action object with a 'type' and optional 'payload'.

/**
 * addToCart -- Adds a product to the cart.
 * @param {Object} product - The product to be added to the cart
 * @returns {Object} Redux action
 */
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

/**
 * removeFromCart --- Removes a product from the cart using its ID.
 * @param {number|string} id - The ID of the product to remove
 * @returns {Object} Redux action
 */
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

/**
 * updateQuantity -- Updates the quantity of a specific product in the cart.
 * @param {number|string} id - The ID of the product
 * @param {number} quantity - The new quantity
 * @returns {Object} Redux action
 */
export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});
