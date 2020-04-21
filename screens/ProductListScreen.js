import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector } from "react-redux";

import P from "../components/P";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import H3 from '../components/H3';


const getFilteredProducts = (productIds, allProducts) => {
    let products = [];
    productIds.map(f => {
        const found = allProducts.find(a => a.id === f);
        if (found !== undefined || found !== null) {
            products.push(found);
        }
    });
    console.log(products.length + " Products found");
    return products;
};

const ProductListScreen = ({ route, navigation }) => {

    const renderProduct = itemData => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Product", { productId: itemData.item.id })}>
                <View style={styles.productContainer}>
                <ImageCard width={150} height={150} source={itemData.item.imageURLs.small[0]} />
                <View style={{...styles.productText, width: 150}}>
                    <P>{itemData.item.name}</P>
                    <H3>£{itemData.item.price}</H3>
                </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const headerFooterComponent = <View style={{height:20}} />;

    const allProducts = useSelector(state => state.products.availableProducts);
    const [products, setProducts] = useState(getFilteredProducts(route.params.productIds, allProducts));

    return (
        <View style={styles.screen}>
            <FlatList data={products} renderItem={renderProduct} numColumns={2} ListHeaderComponent={headerFooterComponent} ListFooterComponent={headerFooterComponent}/>
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
        alignItems: "center",
        paddingHorizontal: 15
    },
    productContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    productText: {
        padding: 5
    }
});


export default ProductListScreen;
