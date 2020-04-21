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

const CartScreen = ({ route, navigation }) => {
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

    //item flatlist 
    const ItemList = props => {
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

    //this adds 5px padding on first and last component of Flatlist
    const flatListVerticalHeaderFooterComponant = <View style={{ height: 5 }}></View>;


    //Homepage JSX
    return (
        <View style={styles.root}>
        <View style={styles.center}>
                <P>Shopping cart is empty.</P>
            </View>
        <ScrollView style={styles.screen} keyboardShouldPersistTaps="never">
        </ScrollView>
        
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        flex: 1,
        width: "100%",
        height: "100%"
    },
    searchBar: {
        marginVertical: 2,
        width: "100%"
    },
    screen: {
        paddingVertical: 15,
        flex: 1,
        height: "100%"
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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


export default CartScreen;
