import { createStore, compose, applyMiddleware } from "redux";
import appReducer from "./reducers";
import thunk from "redux-thunk";
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;
const configStore = () => {
  const Middleware = [thunk];
  const enhancers = [applyMiddleware(...Middleware)];
  const store = createStore(appReducer, composeEnhancers(...enhancers));
  return store;
};
export default configStore;
