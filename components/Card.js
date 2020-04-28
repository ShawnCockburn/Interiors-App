import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import { Theme } from "../constants/Theme";

const Touch = props => {
    return props.onPress === undefined ? (
        <View>{props.children}</View>
    ) :
    (
    <TouchableWithoutFeedback onPress={props.onPress} disabled={props.disabled} >
        {props.children}
    </TouchableWithoutFeedback>
    );
};

const Card = props => {
    const theme = Theme();
    return (
        <Touch onPress={props.onPress} >
            <View style={{shadowColor: theme.colors.border, ...styles.parent}}>
                <View style={{ backgroundColor: theme.colors.card, ...styles.card, ...props.style }}>
                    {props.children}
                </View>
            </View>
        </Touch>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        elevation: 3.5
    },
    parent: {
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 6
    }
});


export default Card;
