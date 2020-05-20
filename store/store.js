import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import settingsReducer from "../store/reducers/settings";
import productsReducer from "../store/reducers/products";
import rangesReducer from "../store/reducers/ranges";
import cartReducer from "../store/reducers/cart";
import promotionsReducer from "../store/reducers/promotion";
import userReducer from "../store/reducers/user";
import categoriesReducer from "../store/reducers/categories";

import * as API from "../data/api"
import { reAuthUser } from "./actions/user";

// const authIsCurrent = store => next => action => {
//   console.log("middleware test")
//   const checkAuthValid = async () => {
//     const state = await store.getState();
//     const user = state.user.user;
//     if (user.idToken) {
//       if (!checkAuthValid(user.expiresOn)) await store.dispatch(reAuthUser);
//     }
//     return next(action);
//   }
//   return checkAuthValid().then(action => action);
// }

const rootReducer = combineReducers({
  settings: settingsReducer,
  products: productsReducer,
  promotions: promotionsReducer,
  ranges: rangesReducer,
  cart: cartReducer,
  user: userReducer,
  categories: categoriesReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk.withExtraArgument(API)));

export default store;


