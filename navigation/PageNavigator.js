import React from "react"
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons';

import { Theme } from "../constants/Theme";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from '../screens/ProductListScreen';
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default () => {

    const theme = Theme();

    const StandardStack = () => {
        return (
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={ProductListScreen} />
            </Stack.Navigator>
        );
    };

    const SearchStack = () => {
        return (
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={SearchScreen} />
            </Stack.Navigator>
        );
    };

    const SettingsStack = () => {
        return (
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        );
    };

    const BottomTabs = (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;

                    if (route.name === 'Home') {
                        icon = <AntDesign name="home" size={size} color={color} />;
                    } else if (route.name === 'Search') {
                        icon = <Ionicons name="md-search" size={size} color={color} />;
                    } else if (route.name === 'Settings') {
                        icon = <SimpleLineIcons name="settings" size={size} color={color} />;
                    }

                    return icon;
                },
            })}
            tabBarOptions={{
                activeTintColor: theme.colors.text,
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Home" component={StandardStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    );

    return (
        <AppearanceProvider>
            <NavigationContainer theme={theme}>
                {BottomTabs}
            </NavigationContainer>
        </AppearanceProvider>
    );
};



