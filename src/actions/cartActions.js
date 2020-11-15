import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((x) => x._id !== product._id);
  dispatch({ type: REMOVE_FROM_CART, payload: cartItems });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
