import axiosService from "../commons/axiosService";
import { API_ENDPOINT } from "../constants/Config";
import qs from "query-string";
//http://localhost:3000/products
const url = "products";

export const getListProducts = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
export const addProduct = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
export const deleteProduct = (productId) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${productId}`);
};
export const getDetailProduct = (productId) => {
  return axiosService.get(`${API_ENDPOINT}/${url}/${productId}`);
};
export const updateProduct = (product) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${product.id}`, product);
};
// export const loginUser = (email, password) => {
//   return axiosService.post(`${API_ENDPOINT}/${user}`, { email, password });
// };
// export const addProductsToEmail = (data) => {
//   return axiosService.post(`${API_ENDPOINT}/${email}`, data);
// };
// export async function seeProductDetail(id) {
//   return await axiosService.get(`${API_ENDPOINT}/${url}/${id}`, null);
// }
