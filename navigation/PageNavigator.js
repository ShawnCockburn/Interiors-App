import React from "react"
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from '../screens/ProductListScreen';

const Stack = createStackNavigator();


export default () => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    StatusBar.setBarStyle(scheme === 'dark' ? "light-content" : "dark-content");

    return (
        <AppearanceProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen name="Home" component={HomeScreen} initialParams={{ theme: theme }} />
                    <Stack.Screen name="Login" component={ProductListScreen} initialParams={{ theme: theme }} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
    );
};



