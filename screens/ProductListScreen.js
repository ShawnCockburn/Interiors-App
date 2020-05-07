import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Text } from 'react-native';
import { useSelector } from "react-redux";

import P from "../components/P";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import H3 from '../components/H3';
import HorizontalLine from '../components/HorizontalLine';


const getFilteredProducts = (productIds, allProducts) => {
    let products = [];
    productIds.map(f => {
        const found = allProducts.find(a => a.id === f);
        if (found !== undefined) {
            products.push(found);
        }
    });
    return products;
};

const ProductListScreen = ({ route, navigation }) => {

    const renderProduct = itemData => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Product", { productId: itemData.item.id, title: itemData.item.code })}>
                <View style={styles.productContainer}>
                    <ImageCard width={150} height={150} source={itemData.item.imageURLs.small[0]} />
                    <View style={{ ...styles.productText, width: 150 }}>
                    <HorizontalLine style={styles.horizontalLine}/>
                        <P>{itemData.item.name}</P>
                        <HorizontalLine style={styles.horizontalLine}/>
                        <P>Code: <Text style={styles.productEmphesis}>{itemData.item.code}</Text></P>
                        <HorizontalLine style={styles.horizontalLine}/>
                        <P>Price: £{itemData.item.price}</P>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const headerFooterComponent = <View style={{ height: 20 }} />;

    const allProducts = useSelector(state => state.products.availableProducts);
    const [products, setProducts] = useState(getFilteredProducts(route.params.productIds, allProducts));


    const numOfCols = Math.floor(Dimensions.get("window").width / 170);

    return (
        <View style={styles.screen}>
            <FlatList data={products} renderItem={renderProduct} showsVerticalScrollIndicator={false} numColumns={numOfCols} ListHeaderComponent={headerFooterComponent} ListFooterComponent={headerFooterComponent} />
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
        alignItems: "center"
    },
    productContainer: {
        paddingHorizontal: 15,
        // paddingBottom: 20
        paddingVertical: 10
    },
    productText: {
        padding: 1
    },
    productEmphesis: {
        fontFamily: "OpenSans-Bold"
    },
    horizontalLine: {
        marginVertical: 5,
        opacity: 0.2
    }
});


export default ProductListScreen;
