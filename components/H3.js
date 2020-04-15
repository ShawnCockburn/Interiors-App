import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Theme } from "../constants/Theme";

const H3 = props => {
    const theme = Theme();
    return (
        <Text style={{ color: theme.colors.text, ...styles.h3, ...props.style }}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    h3: {
        fontFamily: "OpenSans-Bold",
        fontSize: 15
    }
});


export default H3;
