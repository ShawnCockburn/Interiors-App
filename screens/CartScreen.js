import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import P from "../components/P";
import { FlatList } from 'react-native-gesture-handler';
import { updateCartQuantity } from '../store/actions/cart';
import ImageCard from '../components/ImageCard';
import Quantity from "../components/Quantity";


const CartScreen = ({ route, navigation }) => {

    const allProducts = useSelector(state => state.products.availableProducts);
    const getProduct = productId => {
        return allProducts.find(product => product.id === productId);
    };

    const cartItems = useSelector(state => state.cart.items);

    const dispatch = useDispatch();

    const updateCartItemQuantity = (productId, quantity) => {
        dispatch(updateCartQuantity(productId, quantity));
    };

    const CartList = props => {
        //placeholder

        const placeholder = (
            <View style={styles.placeholderText}>
                <P>Shopping cart is empty.</P>
            </View>
        );

        //list of products

        const renderResult = itemData => {
            //todo: style this component for differnt screen sizes 
            const product = getProduct(itemData.item.productId);
            return (
                <View style={styles.cartItemElementConstainer}>
                    <ImageCard source={product.imageURLs.small[0]} width={80} height={80} />
                    <View style={{ flex: 1 }}>
                        <View style={styles.innerCartItemText} >
                            <P>
                                {product.name}
                            </P>
                        </View>
                        <View style={styles.innerCartItemText} >
                            <P>
                                £{itemData.item.quantity * product.price}
                            </P>
                        </View>
                    </View>

                    <Quantity
                        value={itemData.item.quantity}
                        increase={() => { updateCartItemQuantity(itemData.item.productId, itemData.item.quantity + 1) }}
                        decrease={() => { updateCartItemQuantity(itemData.item.productId, itemData.item.quantity - 1) }}
                        disabled={itemData.item.quantity > 1 ? false : true}
                    />

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
    screen: {
        paddingVertical: 15,
        flex: 1,
        height: "100%"
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
    cartItemElementConstainer: {
        flexDirection: "row",
        // paddingVertical: 10,
        alignItems: "center",
        padding: 15
    },
    placeholderText: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    innerCartItemText: {
        padding: 10
    }
});


export default CartScreen;
