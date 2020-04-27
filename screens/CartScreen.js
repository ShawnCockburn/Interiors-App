import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { EvilIcons } from "@expo/vector-icons";

import P from "../components/P";
import { SwipeListView } from 'react-native-swipe-list-view';
import { updateCartQuantity, removeFromCart } from '../store/actions/cart';
import ImageCard from '../components/ImageCard';
import Quantity from "../components/Quantity";
import { Theme } from '../constants/Theme';
import { TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native-gesture-handler';


const CartScreen = ({ route, navigation }) => {

    const [rowIsOpen, setRowIsOpen] = useState(false);

    const theme = Theme();


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

        const renderResult = (itemData, rowMap) => {
            //todo: style this component for differnt screen sizes 
            const product = getProduct(itemData.item.productId);
            // console.log()
            return (
                // <View style={{ ...styles.cartItemElementConstainer, backgroundColor: theme.colors.background }}>
                //     <ImageCard source={product.imageURLs.small[0]} width={80} height={80} />
                //     <View style={{ flex: 1 }}>
                //         <View style={styles.innerCartItemText} >
                //             <P>
                //                 {product.name}
                //             </P>
                //         </View>
                //         <View style={styles.innerCartItemText} >
                //             <P>
                //                 £{itemData.item.quantity * product.price}
                //             </P>
                //         </View>
                //     </View>

                //     <Quantity
                //         value={itemData.item.quantity}
                //         increase={() => { updateCartItemQuantity(itemData.item.productId, itemData.item.quantity + 1) }}
                //         decrease={() => { updateCartItemQuantity(itemData.item.productId, itemData.item.quantity - 1) }}
                //         disabled={itemData.item.quantity > 1 ? false : true}
                //     />

                // </View>



                <TouchableWithoutFeedback style={{ ...styles.cartItemElementConstainer, backgroundColor: theme.colors.background }} onPress={() => navigation.navigate("Product", { productId: itemData.item.productId, title: product.code })}>
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
                    <TouchableWithoutFeedback style={{padding: 10}}>
                        <Quantity
                            value={itemData.item.quantity}
                            increase={() => { updateCartItemQuantity(itemData.item.productId, itemData.item.quantity + 1) }}
                            decrease={() => { updateCartItemQuantity(itemData.item.productId, itemData.item.quantity - 1) }}
                            disabled={itemData.item.quantity > 1 ? false : true}
                        />
                    </TouchableWithoutFeedback>

                </TouchableWithoutFeedback>
            );
        };

        const renderHiddenDeleteItem = (data, rowMap) => (
            <View style={{ ...styles.rowBack, backgroundColor: theme.colors.remove, width: Dimensions.get("window").width / 2 }}>
                <TouchableOpacity onPress={() => { dispatch(removeFromCart(data.item.productId)) }}>
                    <EvilIcons name="trash" size={38} color={"white"} />
                </TouchableOpacity>
            </View>
        )

        const productList = (
            <SwipeListView data={cartItems} renderItem={renderResult} keyExtractor={item => item.productId}
                renderHiddenItem={renderHiddenDeleteItem}
                leftOpenValue={110}
                stopLeftSwipe={Dimensions.get("window").width / 2}
                disableLeftSwipe={true}
                onRowOpen={() => { setRowIsOpen(true) }}
                onRowClose={() => { setRowIsOpen(false) }}
                swipeToOpenPercent={1}
            />
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
        width: "100%",
        maxWidth: Dimensions.get("screen").width,
        flexDirection: "row",
        // paddingVertical: 10,
        alignItems: "center",
        padding: 15,
        paddingRight: 0
    },
    cartItemInnerElementConstainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    placeholderText: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
    },
    innerCartItemText: {
        width: "100%",
        padding: 10
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 35
    },
    innerCartItemTextContainer: {
        maxWidth: Dimensions.get("window").width - 200
    }
});


export default CartScreen;
