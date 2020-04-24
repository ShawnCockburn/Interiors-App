import React from 'react';
import { StyleSheet, ImageBackground, Platform } from 'react-native';
import Card from "../components/Card";
const ImageCard = props => {
    const source = props.source == undefined ? require("../assets/placeholder.png") : {uri: props.source}
    return (
        <Card style={{ width: props.width, height: props.height, ...styles.innerCard, ...props.style }}>
            <ImageBackground style={{ width: props.width, height: props.height }} source={source}>{props.children}</ImageBackground>
        </Card>
    );
};

const styles = StyleSheet.create({
    innerCard: {
        overflow:  "hidden"
    }
});


export default ImageCard;
