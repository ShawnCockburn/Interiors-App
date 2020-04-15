import React from 'react';
import { StyleSheet, ImageBackground, Platform } from 'react-native';
import Card from "../components/Card";
const ImageCard = props => {
    return (
        <Card style={{ width: props.width, height: props.height, ...styles.innerCard, ...props.style }}>
            <ImageBackground style={{ width: props.width, height: props.height }} source={{ uri: props.source }}>{props.children}</ImageBackground>
        </Card>
    );
};

const styles = StyleSheet.create({
    innerCard: {
        overflow:  "hidden" 
    }
});


export default ImageCard;
