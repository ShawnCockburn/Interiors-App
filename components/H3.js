import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import {
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';

const H3 = props => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <Text style={{...props.style, color: theme.colors.text, ...styles.h3}}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    h3: {
        fontFamily: "OpenSans-Bold",
        fontSize: 15
    }
});


export default H3;
