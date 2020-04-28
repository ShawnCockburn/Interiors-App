import React from 'react';
import {
    StyleSheet,
    View,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import Card from '../components/Card';

import { Theme } from "../constants/Theme";

const CenteredModal = props => {
    const theme = Theme();

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.close}
        >
            <TouchableOpacity
                style={styles.centeredView}
                activeOpacity={1}
                onPressOut={props.close}
            >
                    <Card style={{ ...styles.modalView, ...props.style }} onPress={() => {}} disabled={true}>
                        {props.children}
                    </Card>
            </TouchableOpacity>
        </Modal>
    )
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        // margin: 20,
        // padding: 35
    }
});


export default CenteredModal;
