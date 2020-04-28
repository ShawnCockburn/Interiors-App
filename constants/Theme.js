import { useColorScheme } from 'react-native-appearance';
import { StatusBar } from 'react-native';
import { useSelector } from "react-redux";

import { DARKMODE_OPTIONS } from "../data/settings";



export const customDarkTheme = {
    colors: {
        primary: "rgb(10, 132, 255)",
        background: "#141414",
        card: "#272727",
        text: "white",
        border: "#121212",
        disabled: "rgba(255, 255, 255, 0.38)",
        tint: "#c9a86b",
        remove: "#ef5350"
    },
    dark: true,
};
export const customLightTheme = {
    colors: {
        background: "#fcfcfc",
        border: "#c7c7c7",
        card: "rgb(255, 255, 255)",
        primary: "rgb(0, 122, 255)",
        text: "rgb(28, 28, 30)",
        disabled: "#a1a1a1",
        tint: "#D3B988",
        remove: "#f2816b"
    },
    dark: false,

};


export const Theme = () => {
    const scheme = useColorScheme();
    const themeSettings = useSelector(state => state.settings.settings);

    switch (themeSettings.darkmode) {
        case DARKMODE_OPTIONS.LIGHT:
            StatusBar.setBarStyle("dark-content");
            return customLightTheme;

        case DARKMODE_OPTIONS.DARK:
            StatusBar.setBarStyle("light-content");
            return customDarkTheme;

        case DARKMODE_OPTIONS.AUTO:
            StatusBar.setBarStyle(scheme === 'dark' ? "light-content" : "dark-content");
            return scheme === 'dark' ? customDarkTheme : customLightTheme;

        default:
            StatusBar.setBarStyle(scheme === 'dark' ? "light-content" : "dark-content");
            return scheme === 'dark' ? customDarkTheme : customLightTheme;
    }
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



