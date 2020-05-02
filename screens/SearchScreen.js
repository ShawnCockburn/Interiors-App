import React, { useState } from 'react';
import { StyleSheet, View, Keyboard, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from "react-redux";

import P from "../components/P";
import H3 from "../components/H3";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import SearchItem from '../models/searchItemModel';


const SearchScreen = ({ route, navigation }) => {

    const [searchResults, setSearchResults] = useState([]);

    const allProducts = useSelector(state => state.products.availableProducts);

    const searchProducts = text => {
        const searchItems = allProducts.map(product => {
            if (product.code.includes(text) || product.name.includes(text)) {
                return new SearchItem(product.id, product.name, product.description, product.imageURLs.small[0]);
            }
        });
        return searchItems;
    };

    //horizontal flatlists
    const renderResult = itemData => {
        //todo: style this component for differnt screen sizes 
        return itemData !== undefined ? (
            <View style={styles.flatListElementConstainer}>
                <P>
                    {itemData.item.name}
                </P>
            </View>
        ): <View/>;
    };

    // //horizontal flatlist 
    // const ResultsList = props => {
    //     return (
    //         <View>
    //             <FlatList
    //                 {...props}
    //                 style={styles.flatList}
    //                 showsHorizontalScrollIndicator={false}
    //                 ListHeaderComponent={flatListVerticalHeaderFooterComponant}
    //                 ListFooterComponent={flatListVerticalHeaderFooterComponant}
    //             />
    //         </View>
    //     );
    // };

    //this adds 5px padding on first and last component of horizontal Flatlist
    const flatListVerticalHeaderFooterComponant = <View style={{ height: 5 }}></View>;

    //todo: implement search
    //if search is submitted
    const onSubmitSearch = query => {
        setSearchResults(searchProducts(query));
    }

    //Homepage JSX
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
            <View style={styles.screen}>
                {/* SearchBar */}

                <View style={styles.screenPadding}>
                    {searchResults !== [] || searchResults !== undefined ? <SearchBar style={styles.searchBar} onSubmitSearch={onSubmitSearch} focus={true} /> : <View />}
                </View>

                <View>
                    <FlatList data={searchResults} keyExtractor={(item, index) => index.toString()} renderItem={renderResult} />
                </View>

                {/* Results */}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        marginVertical: 15,
        width: "100%"
    },
    screen: {
        flex: 1
    },
    center: {
        alignItems: "center"
    },
    screenPadding: {
        paddingHorizontal: 15
    },
    sectionText: {
        paddingVertical: 25
    },
    flatList: {
        width: "100%"
    },
    flatListElementConstainer: {
        paddingVertical: 10,
        alignItems: "center"
    }
});


export default SearchScreen;
