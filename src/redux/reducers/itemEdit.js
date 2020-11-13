import * as types from "../../constants/ActionTypes";
var initialState = {};
const itemEdit = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DETAIL_PRODUCT: {
      return state;
    }
    case types.GET_DETAIL_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      return data;
    }
    case types.GET_DETAIL_PRODUCT_FAILED: {
      const error = action.payload;
      return error;
    }
    default:
      return state;
  }
};
export default itemEdit;
