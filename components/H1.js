import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import {
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';

const H1 = props => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <Text style={{...props.style, color: theme.colors.text, ...styles.h1}}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontFamily: "OpenSans-Bold",
        fontSize: 22
    }
});


export default H1;
