import { combineReducers } from "redux";
import products from "./products";
import itemEdit from "./itemEdit";

const appReducer = combineReducers({
  products,
  itemEdit,
});
export default appReducer;
