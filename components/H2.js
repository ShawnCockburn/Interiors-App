import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Theme } from "../constants/Theme";

const H2 = props => {
    const theme = Theme();
    return (
        <Text style={{ color: theme.colors.text, ...styles.h2, ...props.style }}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    h2: {
        fontFamily: "OpenSans-Bold",
        fontSize: 18
    }
});


export default H2;
