import * as types from "../../constants/ActionTypes";
import { findIndex } from "lodash";

const initialState = {
  listProducts: [],
  product: {},
};
const products = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case types.FETCH_LIST_PRODUCTS: {
      return { ...state };
    }
    case types.FETCH_LIST_PRODUCTS_SUCCESS: {
      const data = action.payload;
      return { ...state, listProducts: data };
    }
    case types.FETCH_LIST_PRODUCTS_FAILED: {
      const error = action.payload;
      return { ...state, listProducts: error };
    }

    case types.ADD_PRODUCT: {
      return { ...state };
    }
    case types.ADD_PRODUCT_SUCCESS: {
      const data = action.payload;
      const newListProducts = [...state.listProducts];
      newListProducts.push(data);
      return { ...state, listProducts: newListProducts };
    }
    case types.ADD_PRODUCT_FAILED: {
      const error = action.payload;
      return { ...state, listProducts: error };
    }

    case types.DELETE_PRODUCT: {
      const id = action.payload;
      return { ...state };
    }
    case types.DELETE_PRODUCT_SUCCESS: {
      const data = action.payload;
      const id = data.data;
      return {
        ...state,
        listProducts: state.listProducts.filter((product) => product.id !== id),
      };
    }
    case types.DELETE_PRODUCT_FAILED: {
      const error = action.payload;
      return { ...state, listProducts: error };
    }

    case types.UPDATE_PRODUCT: {
      return { ...state };
    }
    case types.UPDATE_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      console.log(data, "data-update");
      const newListProducts = [...state.listProducts];
      index = findIndex(newListProducts, ["id", data.id]);
      newListProducts[index] = data;
      return { ...state, listProducts: newListProducts };
    }
    case types.UPDATE_PRODUCT_FAILED: {
      const { error } = action.payload;
      return { ...state, product: error };
    }
    default:
      return { ...state };
  }
};
export default products;
