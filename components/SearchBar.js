import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../constants/Theme";
import P from "../components/P";
import Card from "../components/Card";


const SearchBar = props => {
    const theme = Theme();
    return (
        <Card style={{ ...props.style, ...styles.searchBar }}>
            <View style={styles.textContainer}><Ionicons name="md-search" size={20} color={theme.colors.text} /><P style={styles.text}>Search ...</P></View>
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
        paddingHorizontal: "5%",
        fontSize: 14
    }
});


export default SearchBar;
