import { ADD_FILTER } from "../constants/product";

const addFilter = (key, value) => async (dispatch) => {
  dispatch({ type: ADD_FILTER, payload: { key, value } });
};

export { addFilter };
