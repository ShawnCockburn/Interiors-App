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