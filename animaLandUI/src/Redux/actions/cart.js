import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM } from "../constants/cart";

const addToCart = (product) => async (dispatch) => {
  dispatch({ type: CART_ADD_ITEM, payload: product });
};

const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
};
const emptyCart = () => (dispatch) => {
  dispatch({ type: CART_EMPTY  });
};
export { addToCart, removeFromCart, emptyCart };
