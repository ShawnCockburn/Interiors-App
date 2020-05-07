import React from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';

import Modal from 'react-native-modal';

import Card from '../components/Card';

import { Theme } from "../constants/Theme";

const CenteredModal = props => {
    const theme = Theme();

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;
        

    return (

        <Modal
            animationType="fade"
            // transparent={true}
            visible={props.visible}
            onRequestClose={props.close}
            deviceWidth={deviceWidth}
            deviceHeight={deviceHeight}
            style={{margin: 0}}
        >
            <TouchableOpacity
                style={styles.centeredView}
                activeOpacity={1}
                onPressOut={props.close}
            >
                <Card style={{ ...styles.modalView, ...props.style }} shadowStyle={{ shadowColor: "rgba(0,0,0,0.6)" }} onPress={() => { }} disabled={true}>
                    {props.children}
                </Card>
            </TouchableOpacity>
        </Modal>
    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // ...StyleSheet.absoluteFill,
        // position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        overflow: "hidden",
        // shadowRadius: 0
    }
});


export default CenteredModal;
