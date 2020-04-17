import React, { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import H2 from "../components/H2";
import H3 from "../components/H3";
import { Theme } from "../constants/Theme";

const SettingsScreen = ({ route, navigation }) => {
    const theme = Theme();

    //darkmode switch
    const [darkmodeIsEnabled, setDarkmodeIsEnabled] = useState(theme.dark);
    const toggleSwitch = () => setDarkmodeIsEnabled(previousState => !previousState);

    //SettingsScreen JSX
    return (
        <View style={styles.screen}>
            <View style={styles.settingContainer}>
                <H2>Dark Mode</H2>
                <Switch
                    onValueChange={toggleSwitch}
                    value={darkmodeIsEnabled}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flex: 1
    },
    settingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});


export default SettingsScreen;
