import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

import { Theme } from "../constants/Theme";
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';




const HapticButton = props => {
    
    const theme = Theme();

    const Touchable = props => {
        return Platform.OS === "android" && Platform.Version > 20 ?
            (<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(theme.colors.card, true)} {...props}>{props.children}</TouchableNativeFeedback>) :
            (<TouchableOpacity {...props}>{props.children}</TouchableOpacity>);
};
    return (
        <Touchable style={{ shadowColor: theme.colors.border, ...styles.card, ...props.style }} onPress={() => { buttonPress(); props.onPress(); }} disabled={props.disabled === undefined ? false : props.disabled}>
            {/* <View > */}
                {props.children}
            {/* </View> */}
        </Touchable>
    );
};

const buttonPress = () => {
    if (Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 10) {
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
        elevation: 4,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    }
});

export default HapticButton;
