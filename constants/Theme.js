import { useColorScheme } from 'react-native-appearance';
import { StatusBar } from 'react-native';
import {
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';

export const customDarkTheme = {...DarkTheme};
export const customLightTheme = {...DefaultTheme};

export const Theme = () => {
    const scheme = useColorScheme();
    StatusBar.setBarStyle(scheme === 'dark' ? "light-content" : "dark-content");
    return scheme === 'dark' ? customDarkTheme : customLightTheme;
};





    





/********Work In Progress*******/
// const light = {
//     name: "light",
//     background: {
//         primary: "#FFFFFF",
//         secondary: "#ededee"
//     },
//     text: {
//         primary: "rgba(0, 0, 0, 1)",
//         secondary: "rgba(0, 0, 0, 0.87)",
//         tertiary: "rgba(0, 0, 0,  0.60)",
//         disabled: "rgba(0, 0, 0, 0.38)"
//     },
//     shadow: {
//         ios: {
//             shadowColor: "#000",
//             shadowOffset: {
//                 width: 0,
//                 height: 2,
//             },
//             shadowOpacity: 0.25,
//             shadowRadius: 3.84,
//         },
//         android: {
//             elevation: 5,
//         }
//     },
//     tint: {
//         success: "#32d74b",
//         error: "#ff453a"
//     }
// };
// const dark = {
//     name: "dark",
//     background: {
//         primary: "#121212",
//         secondary: "#272727"
//     },
//     text: {
//         primary: "#ffffff",
//         secondary: "rgba(255, 255, 255, 0.87)",
//         tertiary: "rgba(255, 255, 255, 0.60)",
//         disabled: "rgba(255, 255, 255, 0.38)"
//     },
//     shadow: {
//         ios: {
//             shadowColor: "#000",
//             shadowOffset: {
//                 width: 0,
//                 height: 2,
//             },
//             shadowOpacity: 0.25,
//             shadowRadius: 3.84,
//         },
//         android: {
//             elevation: 5,
//         }
//     },
//     tint: {
//         success: "#32d74b",
//         error: "#ff453a"
//     }
// };



