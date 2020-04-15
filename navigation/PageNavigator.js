import React from "react"
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Theme} from "../constants/Theme"
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from '../screens/ProductListScreen';

const Stack = createStackNavigator();


export default () => {

    const theme = Theme();

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



