const {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY,
  CART_ADD_ITEM_FAIL,
} = require("../constants/cart");

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };
    case CART_ADD_ITEM: {
      const cartItem = action.payload;
      const product = state.cartItems.find(
        (existedProduct) => existedProduct === cartItem
      );
      const cartItems = state.cartItems.map((existedProduct) =>
        existedProduct === product ? cartItem : existedProduct
      );
      if (product) {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        return {
          ...state,
          error: "",
          cartItems,
        };
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...state.cartItems, cartItem])
      );
      return {
        ...state,
        error: "",
        cartItems: [...state.cartItems, cartItem],
      };
    }
    case CART_REMOVE_ITEM:
      const cartItems = state.cartItems.filter(
        (existedProduct) => existedProduct._id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return {
        ...state,
        error: "",
        cartItems,
      };
    case CART_EMPTY:
      localStorage.setItem("cartItems", JSON.stringify([]));
      return {
        ...state,
        error: "",
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
