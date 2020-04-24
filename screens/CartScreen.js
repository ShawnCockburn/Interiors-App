import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import P from "../components/P";
import { FlatList } from 'react-native-gesture-handler';
import {  } from '../store/actions/cart';


const CartScreen = ({ route, navigation }) => {

    const getRandomInt = max => {
        return Math.floor((Math.random() + 1) * Math.floor(max));
    }

    const allProducts = useSelector(state => state.products.availableProducts);
    const getProduct = productId => {
        return allProducts.find(product => product.id === productId);
    };

    const cartItems = useSelector(state => state.cart.items);

    const dispatch = useDispatch();

    const CartList = props => {
        //placeholder

        const placeholder = (
            <View style={styles.center}>
                <P>Shopping cart is empty.</P>
            </View>
        );

        //list of products

        const renderResult = itemData => {
            //todo: style this component for differnt screen sizes 
            const product = getProduct(itemData.item.productId);
            return (
                <View style={styles.flatListElementConstainer}>
                    <P>
                        {product.name}
                    </P>
                    <P>{itemData.item.quantity}</P>
                </View>
            );
        };

        const productList = (
            <FlatList data={cartItems} renderItem={renderResult} keyExtractor={item => item.productId} />
        );

        //this adds 5px padding on first and last component of Flatlist
        const flatListVerticalHeaderFooterComponant = <View style={{ height: 5 }}></View>;


        //retun based on if cart empty
        return _.isEmpty(props.cartItemData) ? placeholder : productList;
    }


    //Homepage JSX
    return (
        <View style={styles.root}>
            <CartList cartItemData={cartItems} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
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
