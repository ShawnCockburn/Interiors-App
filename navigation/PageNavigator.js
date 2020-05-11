import React, { useEffect, useState } from "react"
import { Animated, Easing } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";

import { Theme } from "../constants/Theme";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from '../screens/ProductListScreen';
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CartScreen from "../screens/CartScreen";
import ProductScreen from "../screens/ProductScreen";
import AuthScreen from "../screens/AuthScreen";
import { reAuthUser } from "../store/actions/user";
import LoadingView from "../components/LoadingView";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();
    useEffect(() => {
        const loadExistingUser = async () => {
            setIsLoading(true);
            await dispatch(reAuthUser());
            setIsLoading(false);
        };
        loadExistingUser();
    }, []);

    const user = useSelector(state => state.user.user);
    // console.log(user)

    const theme = Theme();

    const LoadingStack = () => {
        return (
            <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
                <Stack.Screen component={LoadingView} name="Loading" />
            </Stack.Navigator>
        )
    };

    const StandardStack = (props) => {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProductList" component={ProductListScreen} options={({ route }) => ({ title: route.params.title })} />
                <Stack.Screen name="Product" component={ProductScreen} options={({ route }) => ({ title: route.params.title })}
                />
            </Stack.Navigator>
        );
    };

    const SearchStack = () => {
        return (
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Product" component={ProductScreen} options={({ route }) => ({ title: route.params.title })} />
            </Stack.Navigator>
        );
    };


    const CartStack = () => {
        return (
            <Stack.Navigator initialRouteName="Cart">
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Product" component={ProductScreen} options={({ route }) => ({ title: route.params.title })} />
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
                    } else if (route.name === 'Cart') {
                        icon = <AntDesign name="shoppingcart" size={size} color={color} />;
                    }

                    return icon;
                },
            })}
            tabBarOptions={{
                activeTintColor: theme.colors.text,
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="Home" component={StandardStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Cart" component={CartStack} path="cart" />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    );

    const transition = {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
    }

    const UserAuthStack = (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, transitionSpec: { open: transition, close: transition } }}>
            <Stack.Screen component={AuthScreen} name="Login" />
        </Stack.Navigator>
    );

    const RootSwitchStack = () => {
        return isLoading ? <LoadingStack /> :
            user.idToken !== undefined ? BottomTabs : UserAuthStack;
    };

    return (
        <AppearanceProvider>
            <NavigationContainer theme={theme}>
                <RootSwitchStack />
            </NavigationContainer>
        </AppearanceProvider>
    );
};



