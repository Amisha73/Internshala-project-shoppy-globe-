import { createStore } from 'redux';
import cartReducer from './reducers';

/**
 * loadState -- Attempts to load the persisted Redux state from localStorage.
 * Returns the parsed state object if found, otherwise undefined.
 * Returning undefined will let Redux initialize with the reducer's default state.
 */
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      // No saved state found, return undefined to use initial state
      return undefined;
    }
    // Parse and return saved state object
    return JSON.parse(serializedState);
  } catch (err) {
    // In case of error - return undefined
    return undefined;
  }
};

/**
 * saveState -- Saves the current Redux state to localStorage.
 * Converts the state object to a JSON string.
 * If saving fails, an alert is shown.
 * @param {Object} state - Redux state to persist
 */
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch {
    alert("Nothing is storaged");
  }
};

// Retrieve persisted state on app load (if any)
const persistedState = loadState();

// Create Redux store with persisted state if available
const store = createStore(cartReducer, persistedState);

// Subscribe to store changes and persist state to localStorage on every update
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
