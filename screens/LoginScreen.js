import React from 'react';
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import _ from "lodash";
import { Theme } from "../constants/Theme";

const LoginScreen = ({ route, navigation }) => {
    const theme = Theme();

    //Homepage JSX
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
            <View style={styles.screen}>

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default LoginScreen;
