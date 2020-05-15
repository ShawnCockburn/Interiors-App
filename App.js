import React, { useState } from 'react';
import * as Font from "expo-font"
import { AppLoading } from 'expo';
import { enableScreens } from "react-native-screens";
import PageNavigator from "./navigation/PageNavigator"
import { Provider } from "react-redux";

import store from "./store/store";

enableScreens();

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


