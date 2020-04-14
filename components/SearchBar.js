import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from 'react-native-appearance';
import {
    DefaultTheme,
    DarkTheme
} from '@react-navigation/native';
import P from "../components/P";
import Card from "../components/Card";


const SearchBar = props => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
        <Card style={{ ...props.style, ...styles.searchBar }}>
            <View style={styles.textContainer}><Ionicons name="md-search" size={20} color="grey" /><P style={styles.text}>Search ...</P></View>
        </Card>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        width: "100%",
        height: 45
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: "5%"
    },
    text: {
        paddingHorizontal: "5%"
    }
});


export default SearchBar;
