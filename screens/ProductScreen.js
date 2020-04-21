import React from 'react';
import { StyleSheet, View, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import { useSelector } from "react-redux";

import P from "../components/P";
import H2 from "../components/H2";
import H3 from "../components/H3";
import Card from '../components/Card';
import HapticButton from "../components/HapticButton";
import { Theme } from '../constants/Theme';

//todo: finish styling this page

const ProductScreen = ({ route, navigation }) => {

    const productId = route.params.productId;
    const product = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId));

    const theme = Theme();
    const imageWidth = Dimensions.get('window').width;


    //horizontal flatlists
    const renderProductImage = itemData => {
        return (
            <Image source={{ uri: itemData.item }} defaultSource={require("../assets/placeholder.png")} style={{ width: imageWidth, height: imageWidth }} />
        );
    };

    //Homepage JSX
    return (
        <View style={styles.screen}>
            <ScrollView style={styles.screen} keyboardShouldPersistTaps="never">

                {/* images */}
                <View style={styles.flatListElementConstainer}>
                    <FlatList
                        data={product.imageURLs.medium}
                        keyExtractor={item => item}
                        renderItem={renderProductImage}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment={"start"}
                        snapToInterval={imageWidth + 10}
                        decelerationRate={"fast"}
                        pagingEnabled
                    />
                    <Card style={{ ...styles.imageFooter, ...styles.card }}>
                        <HapticButton style={{ backgroundColor: theme.colors.tint, ...styles.buyButton }} onPress={() => { }}><P>ADD TO CART</P></HapticButton>
                    </Card>
                </View>

                <Card style={{ ...styles.screenPadding, ...styles.card, ...styles.marginVertical }}>
                    <View style={styles.cardSection}>
                        <H2>{product.name}</H2>
                    </View>
                    <View style={styles.cardSection}>
                        <H3>£{product.price}</H3>
                    </View>
                    <P>{product.description}</P>
                </Card>
            </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: "100%"
    },
    screenPadding: {
        paddingHorizontal: 15,
        paddingVertical: 25
    },
    flatList: {
        width: "100%",
        height: "100%"
    },
    flatListElementConstainer: {
        flex: 1,
        width: "100%",
    },
    imageFooter: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        alignItems: "center"
    },
    card: {
        borderRadius: 12
    },
    marginVertical: {
        marginVertical: 15
    },
    buyButton: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 30,
        paddingVertical: 10,
        paddingHorizontal: 70,
        borderRadius: 10
    },
    cardSection: {
        paddingBottom: 20
    }
});


export default ProductScreen;
