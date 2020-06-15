import React, { useState } from 'react';
import { StyleSheet, View, Keyboard, FlatList, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native';
import { useSelector } from "react-redux";
import _ from "lodash";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Theme } from "../constants/Theme";

import CenteredModal from "../components/CenteredModal";
import P from "../components/P";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { SearchItem, searchItemType } from '../models/searchItemModel';
import QrScanner from '../components/QrScanner';

const SearchScreen = ({ route, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const theme = Theme();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableWithoutFeedback onPress={() => {
                        setModalVisible(true);
                    }}>
                        <View style={{ marginRight: 12 }}>
                            <MaterialCommunityIcons name="qrcode-scan" size={24} color={theme.colors.text} />
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
        })
    })

    const [searchResults, setSearchResults] = useState([]);

    const allProducts = useSelector(state => state.products.availableProducts);

    //todo: ignore case
    const searchProducts = text => {
        const searchItems = allProducts.filter(product => {
            const searchQuery = _.toLower(text);
            const code = _.toLower(product.code);
            const name = _.toLower(product.name);
            return (product.id === searchQuery || code === searchQuery || name.includes(searchQuery));
        }).map(product => {
            return new SearchItem(product.id, product.name, product.description, product.price, product.imageURLs[0], product, searchItemType.PRODUCT);
        });
        return searchItems;
    };

    //if search is submitted
    const onSubmitSearch = query => {
        setSearchResults(searchProducts(query));
    };
    const searchCancel = () => {
        setSearchResults([]);
    };

    const renderResult = itemData => {
        //todo: style this component for differnt screen sizes 
        return itemData !== undefined ? (

            <TouchableWithoutFeedback onPress={() => navigation.navigate("Product", { productId: itemData.item.itemData.id, title: itemData.item.itemData.code })}>
                <View style={styles.cartItemElementConstainer}>
                    <ImageCard source={itemData.item.imageURL} width={80} height={80} />
                    <View style={styles.itemInfoContainer}>
                        <View style={styles.innerCartItemText} >
                            <P style={styles.infoText}>
                                {itemData.item.name}
                            </P>
                        </View>
                        <View style={styles.innerCartItemText} >
                            <P style={styles.infoText}>
                                £{itemData.item.price}
                            </P>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>



        ) : <View />;
    };

    const onScan = (type, id) => {

        const productExists = allProducts.some(product => product.id === id);
        if (productExists) {
            onSubmitSearch(id);
            setModalVisible(false);
            navigation.navigate("Product", { productId: id });
        } else {
            const AsyncAlert = async () => new Promise((resolve) => {
                Alert.alert(
                    "QR code scan error",
                    "The scanned product does not exist",
                    [
                        {
                            text: 'ok',
                            onPress: () => {
                                resolve('YES');
                            },
                        },
                    ],
                    { cancelable: false },
                );
            });
            AsyncAlert().then(() => setModalVisible(false));
        }

    }

    //Homepage JSX
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
            <View style={styles.screen}>
                <CenteredModal visible={modalVisible} style={styles.modalView} close={() => { setModalVisible(false) }}>
                    <QrScanner onScan={onScan} />
                </CenteredModal>
                {/* SearchBar */}

                <View style={styles.screenPadding}>
                    <SearchBar style={styles.searchBar} onSubmitSearch={onSubmitSearch} searchCancel={searchCancel} focus={true} />
                </View>

                <View>
                    {_.isEmpty(searchResults) ? <View /> : <FlatList data={searchResults} keyExtractor={(item, index) => index.toString()} renderItem={renderResult} />}
                </View>

                {/* Results */}
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    searchBar: {
        marginVertical: 15,
        width: "100%"
    },
    screen: {
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
    flatList: {
        width: "100%"
    },
    flatListElementConstainer: {
        paddingVertical: 10,
        alignItems: "center"
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
    itemInfoContainer: {
        flex: 1,
        height: 80,
        padding: 2,
        paddingHorizontal: 8,
        justifyContent: "space-between"
    },
    infoText: {
        fontSize: 16
    },
    modalView: {
        width: Dimensions.get("window").width / 1.25,
        height: Dimensions.get("window").width / 1.25
    }
});


export default SearchScreen;
