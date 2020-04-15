import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Theme } from "../constants/Theme";

const H1 = props => {
    const theme = Theme();
    return (
        <Text style={{ color: theme.colors.text, ...styles.h1, ...props.style }}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontFamily: "OpenSans-Bold",
        fontSize: 22
    }
});


export default H1;
