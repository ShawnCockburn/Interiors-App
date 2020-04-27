import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import { Theme } from "../constants/Theme";
import HapticButton from "./HapticButton";
import H3 from "../components/H3";



const Quantity = props => {
    const theme = Theme();
    const buttonSize = props.buttonSize === undefined ? 30 : props.buttonSize;
    const buttonStyle = {...styles.button, ...{width: buttonSize, height: buttonSize, backgroundColor: theme.colors.tint}};
    return (
        <View style={{...styles.container, ...props.containerStyle}}>
            <HapticButton style={buttonStyle} onPress={props.decrease} disabled={props.disabled} >
                <AntDesign name="minus" size={18} color={theme.colors.text}/>
            </HapticButton>
            <View style={styles.valueTextContainer}>
                <H3 style={styles.valueText} >{props.value}</H3>
            </View>
            <HapticButton style={buttonStyle} onPress={props.increase} >
                <AntDesign name="plus" size={18} color={theme.colors.text}/>
            </HapticButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        width: 90
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        // margin: 5,
        borderRadius: 5
    },
    valueTextContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    valueText: {
        fontSize: 18
    }
});


export default Quantity;
