const { ADD_FILTER } = require("../constants/product");

const initialState = {
  filters: { type: "animal", category: "cat", price: [0, 100] },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      const { key, value } = action.payload;
      return { filters: { ...state.filters, [key]: value } };

    default:
      return state;
  }
};

export default filterReducer;
