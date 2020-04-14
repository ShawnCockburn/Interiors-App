import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import {
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';

const P = props => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <Text style={{...props.style, color: theme.colors.text, ...styles.p }}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    p: {
        fontFamily: "OpenSans-Regular",
        fontSize: 13
    }
});


export default P;
