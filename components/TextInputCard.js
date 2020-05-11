import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Theme } from "../constants/Theme";
import Card from "./Card";


const TextInputCard = props => {
    const theme = Theme();

    return (
        <Card style={{ ...props.style, ...styles.textContainer }} shadowStyle={props.shadowStyle}>
            {props.icon}
            <TextInput {...props} style={{ ...styles.textInput, color: theme.colors.text }} />
        </Card>
    );
};

const styles = StyleSheet.create({
    textInput: {
        flexGrow: 1,
        fontSize: 16
    },
    textContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "center"
    }
});


export default TextInputCard;
