import React, { useState } from 'react';
import * as Font from "expo-font"
import { AppLoading } from 'expo';
import { enableScreens } from "react-native-screens";
import PageNavigator from "./navigation/PageNavigator"
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import settingsReducer from "./store/reducers/settings";
import productsReducer from "./store/reducers/products";
import rangesReducer from "./store/reducers/ranges";
import cartReducer from "./store/reducers/cart";
import promotionsReducer from "./store/reducers/promotion";

enableScreens();

const rootReducer = combineReducers({
  settings: settingsReducer,
  products: productsReducer,
  promotions: promotionsReducer,
  ranges: rangesReducer,
  cart: cartReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans-Regular': require("./assets/fonts/OpenSans-Regular.ttf"),
    'OpenSans-Bold': require("./assets/fonts/OpenSans-Bold.ttf")
  });
};


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
  } else {
    return (
      <Provider store={store}>
        <PageNavigator />
      </Provider>
    );
  }
}


