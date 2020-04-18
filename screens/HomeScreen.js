import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import P from "../components/P";
import H3 from "../components/H3";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { FlatList } from 'react-native-gesture-handler';

/**************test data***************/
import { CATEGORIES, PROMOTIONS, PRODUCTS } from "../data/testData";
import Card from '../components/Card';
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
    const renderProduct = itemData => {
        //todo: style this component for differnt screen sizes 
        return (
            <View style={styles.flatListHorizontalElementConstainer}>
                <ImageCard width={180} height={120} source={itemData.item.imageURL} style={{ borderBottomLeftRadius: 0,  borderBottomRightRadius: 0}}/>
                <Card style={{...styles.trendingProductText, width: 180}}>
                    <H3>
                        {itemData.item.name}
                    </H3>
                    <P>
                        {itemData.item.description.substring(0,43) + "..."}
                    </P>
                </Card>
            </View>
        );
    };
    //this adds 5px padding on first and last component of horizontal Flatlist
    const flatListHorizontalHeaderFooterComponant = <View style={{ width: 5 }}></View>;

    //horizontal flatlist 
    const HList = props => {
        return (
            <View>
                <FlatList
                    {...props}
                    style={styles.flatListHorizontal}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={flatListHorizontalHeaderFooterComponant}
                    ListFooterComponent={flatListHorizontalHeaderFooterComponant}
                />
            </View>
        );
    };

    //section header text
    const SectionHeader = props => {
        return (
            <View style={styles.screenPadding}>
                <View style={styles.sectionText}>
                    <H3>{props.children}</H3>
                </View>
            </View>
        );
    }

    //todo: implement search
    //if search is submitted
    const onSubmitSearch = query => {
        console.log(query);
    }

    //Homepage JSX
    return (
        <ScrollView style={styles.screen}>

            {/* SearchBar */}

            <View style={styles.screenPadding}>
                    <SearchBar style={styles.searchBar} onPress={() => navigation.navigate("Search")} />
            </View>

            {/* Categories */}

            <SectionHeader>Categories</SectionHeader>
            <HList
                data={CATEGORIES}
                renderItem={renderCategory}
            />

            {/* Promotions */}

            <SectionHeader>Promotions</SectionHeader>
            <HList
                data={PROMOTIONS}
                renderItem={renderPromotion}
            />

            {/* Trending Products */}

            <SectionHeader>Trending Products</SectionHeader>
            <HList
                data={PRODUCTS}
                renderItem={renderProduct}
            />
            <View style={{height: 30}}></View>
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
    flatListHorizontal: {
        width: "100%"
    },
    flatListHorizontalElementConstainer: {
        paddingHorizontal: 10,
        alignItems: "center"
    },
    trendingProductText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignContent: "center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    }
});


export default HomeScreen;
