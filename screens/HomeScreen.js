import React from 'react';
import { StyleSheet, View } from 'react-native';

import P from "../components/P";
import H3 from "../components/H3";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { FlatList } from 'react-native-gesture-handler';

/**************test data***************/
import { CATEGORIES, PROMOTIONS } from "../data/testData"
/**************************************/

const HomeScreen = ({ route, navigation }) => {
    //horizontal flatlists
    const renderCategory = itemData => {
        //todo: style this component for differnt screen sizes 
        return (
            <View style={styles.flatListHorizontalElementConstainer}>
                <ImageCard width={120} height={120} source={itemData.item.imageURL} />
                <View>
                    <P>
                        {itemData.item.title}
                    </P>
                </View>
            </View>
        );
    };
    const renderPromotion = itemData => {
        //todo: style this component for differnt screen sizes 
        return (
            <View style={styles.flatListHorizontalElementConstainer}>
                <ImageCard width={180} height={120} source={itemData.item.imageURL} />
                <View>
                    <P>
                        {itemData.item.title}
                    </P>
                </View>
            </View>
        );
    };
    //this adds 5px padding on first and last component of horizontal Flatlist
    const flatListHorizontalHeaderFooterComponant = <View style={{ width: 5 }}></View>;

    //Homepage JSX
    return (
        <View style={styles.screen}>
            <View style={styles.screenPadding}>
                <View style={styles.center}>
                    <SearchBar />
                </View>
                <View style={styles.sectionText}>
                    <H3>Categories</H3>
                </View>
            </View>
            <View>
                <FlatList
                    ListHeaderComponent={flatListHorizontalHeaderFooterComponant}
                    ListFooterComponent={flatListHorizontalHeaderFooterComponant}
                    horizontal={true} showsHorizontalScrollIndicator={false}
                    style={styles.flatListHorizontal}
                    data={CATEGORIES}
                    renderItem={renderCategory} />
            </View>
            <View style={styles.screenPadding}>
                <View style={styles.sectionText}>
                    <H3>Promotions</H3>
                </View>
            </View>
            <View>
                <FlatList
                    ListHeaderComponent={flatListHorizontalHeaderFooterComponant}
                    ListFooterComponent={flatListHorizontalHeaderFooterComponant}
                    horizontal={true} showsHorizontalScrollIndicator={false}
                    style={styles.flatListHorizontal}
                    data={PROMOTIONS}
                    renderItem={renderPromotion} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        width: "100%",
        height: 50
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
    flatListHorizontal: {
        width: "100%"
    },
    flatListHorizontalElementConstainer: {
        paddingHorizontal: 10,
        alignItems: "center"
    }
});


export default HomeScreen;
