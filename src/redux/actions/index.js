import * as types from "../../constants/ActionTypes";
import * as taskApis from "../../utils/apiCaller";
export const fetchListProduct = (params = {}) => {
  return {
    type: types.FETCH_LIST_PRODUCTS,
    payload: {
      params,
    },
  };
};
export const fetchListProductSuccess = (data) => {
  return {
    type: types.FETCH_LIST_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const fetchListProductFailed = (error) => {
  return {
    type: types.FETCH_LIST_PRODUCTS_FAILED,
    payload: error,
  };
};
export const actFetchListProduct = () => {
  return async (dispatch) => {
    dispatch(fetchListProduct());
    await taskApis
      .getListProducts()
      .then((resp) => {
        const { data } = resp;
        dispatch(fetchListProductSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchListProductFailed(error));
      });
  };
};

export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    payload: product,
  };
};
export const addProductSuccess = (data) => {
  return {
    type: types.ADD_PRODUCT_SUCCESS,
    payload: data,
  };
};
export const addProductFailed = (error) => {
  return {
    type: types.ADD_PRODUCT_FAILED,
    payload: error,
  };
};
export const actAddProduct = (product) => {
  return async (dispatch) => {
    try {
      const resp = await taskApis.addProduct(product);
      const { data } = resp;
      dispatch(addProductSuccess(data));
    } catch (error) {
      dispatch(addProductFailed(error));
    }
  };
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: { id },
  };
};
export const deleteProductSuccess = (data) => {
  return {
    type: types.DELETE_PRODUCT_SUCCESS,
    payload: { data },
  };
};
export const deleteProductFailed = (error) => {
  return {
    type: types.DELETE_PRODUCT_FAILED,
    payload: { error },
  };
};
export const actDeleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(deleteProduct(id));

    try {
      const resp = await taskApis.deleteProduct(id);
      const data = resp;
      if (data.status === 200) {
        dispatch(deleteProductSuccess(id));
      }
    } catch (error) {
      dispatch(deleteProductFailed(error));
    }
  };
};

export const getDetailProduct = (id) => {
  return {
    type: types.GET_DETAIL_PRODUCT,
    payload: { id },
  };
};
export const getDetailProductSuccess = (data) => {
  return {
    type: types.GET_DETAIL_PRODUCT_SUCCESS,
    payload: { data },
  };
};
export const getDetailProductFailed = (error) => {
  return {
    type: types.GET_DETAIL_PRODUCT_FAILED,
    payload: { error },
  };
};
export const actGetDetailProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getDetailProduct(id));
      const resp = await taskApis.getDetailProduct(id);
      const { data } = resp;
      dispatch(getDetailProductSuccess(data));
    } catch (error) {
      dispatch(getDetailProductFailed(error));
    }
  };
};

export const updateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    payload: { product },
  };
};
export const updateProductSuccess = (data) => {
  return {
    type: types.UPDATE_PRODUCT_SUCCESS,
    payload: { data },
  };
};
export const updateProductFailed = (error) => {
  return {
    type: types.UPDATE_PRODUCT_FAILED,
    payload: error,
  };
};
export const actUpdateProduct = (product) => {
  return async (dispatch) => {
    try {
      dispatch(updateProduct(product));
      const resp = await taskApis.updateProduct(product);
      const { data } = resp;
      dispatch(updateProductSuccess(data));
    } catch (error) {
      dispatch(updateProductFailed(error));
    }
  };
};
