import React from 'react';
import { StyleSheet, View } from 'react-native';

import P from "../components/P"
import SearchBar from "../components/SearchBar"

const HomeScreen = ({ route, navigation }) => {
    const textColor = route.params.theme.colors.text;
    return (
        <View style={styles.screen}>
            <SearchBar />
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


export default HomeScreen;
