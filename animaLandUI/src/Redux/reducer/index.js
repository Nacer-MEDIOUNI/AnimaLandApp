import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart";
import productReducer from "./product";
import filterReducer from "./filters";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  productReducer,
  filterReducer,
});
export default rootReducer;
