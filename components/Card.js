import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import {
    DefaultTheme,
    DarkTheme
} from '@react-navigation/native';


const Card = props => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <View style={{ ...props.style, shadowColor: theme.colors.border, backgroundColor: theme.colors.card, ...styles.card }}>
        {props.children}
        </View>
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
