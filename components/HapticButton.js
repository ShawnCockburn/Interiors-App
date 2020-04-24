import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

import { Theme } from "../constants/Theme";

const HapticButton = props => {
    const theme = Theme();
    return (
        <TouchableOpacity onPress={() => {buttonPress(); props.onPress();}}>
            <View style={{shadowColor: theme.colors.border, ...styles.card, ...props.style }}>
                {props.children}
            </View>
        </TouchableOpacity>
    );
};

const buttonPress = () => {
    if (Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 10){
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }
};

const styles = StyleSheet.create({
    card: {
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 4
    }
});


export default HapticButton;
