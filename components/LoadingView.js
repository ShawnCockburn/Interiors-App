import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { Theme } from "../constants/Theme";

const LoadingView = props => {
    const theme = Theme();
    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={theme.colors.disabled} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});


export default LoadingView;
