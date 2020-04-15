import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Theme } from "../constants/Theme";

const P = props => {
    const theme = Theme();
    return (
        <Text style={{ color: theme.colors.text, ...styles.p, ...props.style }}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    p: {
        fontFamily: "OpenSans-Regular",
        fontSize: 13
    }
});


export default P;
