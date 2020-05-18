import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import { TouchableWithoutFeedback, FlatList } from 'react-native-gesture-handler';
import * as productActions from "../store/actions/products";
import * as rangeActions from "../store/actions/ranges";
import * as promotionActions from "../store/actions/promotions";
import * as cartActions from "../store/actions/cart";
import * as categoryActions from "../store/actions/categories";
import { useDispatch } from "react-redux";

import P from "../components/P";
import H3 from "../components/H3";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import Card from '../components/Card';
import ReduxActionDependencyLoading from '../components/ReduxActionDependencyLoading';

const loadingDependencies = [productActions.fetchProducts, rangeActions.fetchRanges, promotionActions.fetchPromotions, cartActions.getCart, categoryActions.fetchCategories];

const HomeScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const ranges = useSelector(state => state.ranges.ranges);
    const promotions = useSelector(state => state.promotions.promotions);
    const categories = useSelector(state => state.categories.categories);

    //horizontal flatlists
    const renderCategory = itemData => {
        //todo: style this component for differnt screen sizes 
        return (
            <View style={styles.flatListHorizontalElementConstainer}>
                <ImageCard width={120} height={100} source={itemData.item.imageURL} style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
                <Card style={{ ...styles.trendingProductText, width: 120 }}>
                    <P>
                        {itemData.item.title}
                    </P>
                </Card>
            </View>
        );
    };
    const renderPromotion = itemData => {
        //todo: style this component for differnt screen sizes 
        return (
            <View style={styles.flatListHorizontalElementConstainer}>
                <ImageCard width={180} height={120} source={itemData.item.imageURL} />
            </View>
        );
    };
    const renderRange = itemData => {
        //todo: style this component for differnt screen sizes 
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate("ProductList", { productIds: itemData.item.productIds, title: itemData.item.name })}>
                <View style={{ ...styles.flatListHorizontalElementConstainer, ...styles.bottomHlist }}>
                    <ImageCard width={180} height={120} source={itemData.item.imageURL} style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
                    <Card style={{ ...styles.trendingProductText, width: 180 }}>
                        <H3>
                            {itemData.item.name}
                        </H3>
                        <P>
                            {itemData.item.description.substring(0, 43) + "..."}
                        </P>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    };
    //this adds 5px padding on first and last component of horizontal Flatlist
    const flatListHorizontalHeaderFooterComponant = <View style={{ width: 5 }}></View>;

    //horizontal flatlist 
    const HList = props => {
        return (
            // <View >
            <FlatList
                {...props}
                style={{ ...styles.flatListHorizontal, ...props.style }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={flatListHorizontalHeaderFooterComponant}
                ListFooterComponent={flatListHorizontalHeaderFooterComponant}
            />
            // </View>
        );
    };

    //section header text
    const SectionHeader = props => {
        return (
            <View style={styles.screenPadding}>
                <View style={styles.sectionTextContainer}>
                    <P style={styles.sectionText}>{props.children}</P>
                </View>
            </View>
        );
    }

    //Homepage JSX

    const loadedView = () => (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>

            {/* SearchBar */}

            <View style={styles.screenPadding}>
                <SearchBar style={styles.searchBar} onPress={() => navigation.navigate("Search")} />
            </View>

            {/* Categories */}

            <SectionHeader>Categories</SectionHeader>
            <HList
                data={categories}
                renderItem={renderCategory}
            />

            {/* Promotions */}

            <SectionHeader>Promotions</SectionHeader>
            <HList
                data={promotions}
                renderItem={renderPromotion}
            />

            {/* Trending Products */}

            <SectionHeader>Ranges</SectionHeader>
            <HList
                data={ranges}
                renderItem={renderRange}
            />
        </ScrollView>
    );

    return <ReduxActionDependencyLoading loadedView={loadedView} dependencies={loadingDependencies}/>
};

const styles = StyleSheet.create({
    searchBar: {
        marginVertical: 15,
        width: "100%"
    },
    screen: {
        // paddingVertical: 15,
        flex: 1
    },
    center: {
        alignItems: "center"
    },
    screenPadding: {
        paddingHorizontal: 15
    },
    sectionTextContainer: {
    },
    sectionText: {
        fontSize: 17
    },
    flatListHorizontal: {
        width: "100%",
        paddingVertical: 9
    },
    flatListHorizontalElementConstainer: {
        // paddingHorizontal: 10,
        padding: 10,
        alignItems: "center"
    },
    trendingProductText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignContent: "center",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    bottomHlist: {
        paddingBottom: 15
    }
});


export default HomeScreen;
