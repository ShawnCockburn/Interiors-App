import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import {
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';

const H2 = props => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <Text style={{...props.style, color: theme.colors.text, ...styles.h2}}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    h2: {
        fontFamily: "OpenSans-Bold",
        fontSize: 18
    }
});


export default H2;
