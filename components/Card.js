import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import { Theme } from "../constants/Theme";

const Card = props => {
    const theme = Theme();
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={{ shadowColor: theme.colors.border, backgroundColor: theme.colors.card, ...styles.card, ...props.style }}>

                {props.children}

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    }
});


export default Card;
