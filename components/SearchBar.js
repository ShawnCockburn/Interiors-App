import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../constants/Theme";
import P from "../components/P";
import Card from "../components/Card";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const SearchBar = props => {
    const theme = Theme();
    const [isSearching, setIsSearching] = useState(props.focus == undefined ? false : props.focus);
    const [searchTextValue, setSearchTextValue] = useState("");

    const searchInput = (
        <View style={styles.textContainer}>
            <TextInput onSubmitEditing={() => {submit()}} style={{...styles.textInput, color: theme.colors.text}} autoFocus={true} value={searchTextValue} onChangeText={text => setSearchTextValue(text)} />
            <TouchableWithoutFeedback onPress={() => {searchCancel()}}><Ionicons name="ios-close" size={30} color="grey" /></TouchableWithoutFeedback>
        </View>
    );
    const placeHolderText = (
        <View style={styles.textContainer}>
            <Ionicons name="md-search" size={20} color={theme.colors.text} /><P style={styles.text}>Search ...</P>
        </View>
    );

    const onSearchPress = () => {
        setIsSearching(true);
    };
    const searchCancel = () => {
        setSearchTextValue("");
        setIsSearching(false);
    };


    //if keyboard closes and there is no text value then the placeholder is set
    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        return () => {
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, [searchTextValue]);

    const _keyboardDidHide = () => {
        if (searchTextValue.trim() === "") {
            searchCancel();
        }
    };


    //when keyboard submit button is pressed
    const submit = () => {
        if(props.onSubmitSearch && searchTextValue.trim() !== ""){
        props.onSubmitSearch(searchTextValue);
        }
    }

    return (
        <Card style={{ ...props.style, ...styles.searchBar }} onPress={props.onPress != undefined ? props.onPress : onSearchPress}>
            {isSearching ? searchInput : placeHolderText}
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
    },
    textInput: {
        flex: 1
    }
});


export default SearchBar;
