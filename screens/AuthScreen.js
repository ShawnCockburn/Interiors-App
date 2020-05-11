import React, { useState, useEffect } from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, View, Image, Alert, Platform } from 'react-native';
import _ from "lodash";
import { Feather } from '@expo/vector-icons';
import { useDispatch } from "react-redux";

import { Theme } from "../constants/Theme";
import P from '../components/P';
import TextInputCard from '../components/TextInputCard';
import HapticButton from '../components/HapticButton';
import { authUser } from '../store/actions/user';

const AuthScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const theme = Theme();

    const CredHeader = props => {
        return (
            <View style={{ flexDirection: "row" }}>
                {props.icon}
                <View style={{ marginHorizontal: props.icon === undefined ? 0 : 15 }}><P style={{ fontSize: props.fontSize }}>{props.children}</P></View>
            </View>
        );
    }

    const checkCredentials = async () => {
        setInvalidEmail(false);
        setInvalidPassword(false);
        dispatch(authUser(email, password, error => {
            if (error.message.includes("EMAIL")) {
                setInvalidEmail(true);
            } else if (error.message.includes("PASSWORD")) {
                setInvalidPassword(true);
            } else {
                Alert.alert("Login error!", "There was an error while authenticating.")
            }
        }))
    };

    //Homepage JSX
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
            <KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={20} style={styles.screen}>
                <View style={styles.inputArea}>
                    {/* <CredHeader icon={<Feather name="user" size={20} color={theme.colors.text}/>} fontSize={16}>Username</CredHeader> */}
                    <TextInputCard
                        style={invalidEmail ? { ...styles.credInput, borderColor: theme.colors.remove, borderWidth: 1 } : styles.credInput}
                        shadowStyle={styles.textInputShadow}
                        placeholder="Username"
                        autoCapitalize={"none"} autoCorrect={false} textContentType={"emailAddress"} keyboardType={"email-address"}
                        icon={<Feather name="user" size={20} color={"grey"} style={{ paddingRight: 10 }} />}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    {/* {invalidEmail ? <P style={{ color: theme.colors.remove }}>Incorrect Email</P> : <></>} */}
                    <TextInputCard
                        style={invalidPassword ? { ...styles.credInput, borderColor: theme.colors.remove, borderWidth: 1 } : styles.credInput}
                        shadowStyle={styles.textInputShadow}
                        placeholder="Password"
                        secureTextEntry={true} autoCapitalize={"none"} autoCorrect={false} textContentType={"password"}
                        icon={<Feather name="lock" size={20} color={"grey"} style={{ paddingRight: 10 }} />}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    {/* {invalidPassword ? <P style={{ color: theme.colors.remove }}>Incorrect Password</P> : <></>} */}

                    <HapticButton style={{ ...styles.submitButton, backgroundColor: theme.colors.tint }} onPress={() => (checkCredentials())}><P>Login</P></HapticButton>

                </View>
                <View style={Platform.OS === "ios" ? styles.imageContainerIos : styles.imageContainerAndroid}>
                    <Image source={require("../assets/hill-logo.png")} style={{ flexShrink: 1, width: 150 }} resizeMode={"contain"} />
                </View>
            </KeyboardAvoidingView>

        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    credInput: {
        marginVertical: 15,
        width: "100%",
        minHeight: 40,
        maxHeight: 42
    },
    inputArea: {
        paddingHorizontal: 30,
        marginHorizontal: 15,
        marginTop: "45%",
        maxWidth: 600,
        alignSelf: "center"
    },
    submitButton: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 30,
        paddingVertical: 10,
        paddingHorizontal: 70,
        borderRadius: 10
    },
    textInputShadow: {
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    imageContainerAndroid: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    imageContainerIos: {
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        left: "50%",
        right: "50%"
    }
});

export default AuthScreen;
