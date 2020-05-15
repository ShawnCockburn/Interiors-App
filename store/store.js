import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import settingsReducer from "../store/reducers/settings";
import productsReducer from "../store/reducers/products";
import rangesReducer from "../store/reducers/ranges";
import cartReducer from "../store/reducers/cart";
import promotionsReducer from "../store/reducers/promotion";
import userReducer from "../store/reducers/user";

import * as API from "../data/api"

const rootReducer = combineReducers({
    settings: settingsReducer,
    products: productsReducer,
    promotions: promotionsReducer,
    ranges: rangesReducer,
    cart: cartReducer,
    user: userReducer
  });
const store = createStore(rootReducer, applyMiddleware(ReduxThunk.withExtraArgument(API)));

export default store;

