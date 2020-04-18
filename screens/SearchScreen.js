import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import P from "../components/P";
import H3 from "../components/H3";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { FlatList } from 'react-native-gesture-handler';

/**************test data***************/
import { CATEGORIES, PROMOTIONS } from "../data/testData";
/**************************************/

const SearchScreen = ({ route, navigation }) => {
    //horizontal flatlists
    const renderResult = itemData => {
        //todo: style this component for differnt screen sizes 
        return (
            <View style={styles.flatListElementConstainer}>
                <P>
                    {itemData.item.title}
                </P>
            </View>
        );
    };

    //horizontal flatlist 
    const ResultsList = props => {
        return (
            <View>
                <FlatList
                    {...props}
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={flatListVerticalHeaderFooterComponant}
                    ListFooterComponent={flatListVerticalHeaderFooterComponant}
                />
            </View>
        );
    };

    //this adds 5px padding on first and last component of horizontal Flatlist
    const flatListVerticalHeaderFooterComponant = <View style={{ height: 5 }}></View>;

    //todo: implement search
    //if search is submitted
    const onSubmitSearch = query => {
        console.log(query);
    }

    //Homepage JSX
    return (
        <ScrollView style={styles.screen} keyboardShouldPersistTaps="never">

            {/* SearchBar */}

            <View style={styles.screenPadding}>
                <SearchBar style={styles.searchBar} onSubmitSearch={onSubmitSearch} focus={true}/>
            </View>

            {/* Results */}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        marginVertical: 2,
        width: "100%"
    },
    screen: {
        paddingVertical: 15,
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
