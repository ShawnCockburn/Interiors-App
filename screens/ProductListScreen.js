import React from 'react';
import { StyleSheet, View } from 'react-native';

import P from "../components/P"
import SearchBar from "../components/SearchBar"

const ProductListScreen = ({ route, navigation }) => {
    const textColor = route.params.theme.colors.text;
    return (
        <View style={styles.screen}>
            <P>ProductListScreen</P>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        width: "100%",
        height: 50
    },
    screen: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        padding: 15
    }
});


export default ProductListScreen;
