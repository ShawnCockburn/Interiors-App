import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, Platform } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

// import { Linking } from 'expo';

const QrScanner = props => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const Scanner = Platform.OS === "ios" ? BarCodeScanner : Camera;

    useEffect(() => {
        (async () => {
            const { status } = await Scanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


// schema shourl look like this
// [path] = [id for path]
//example "product=5eb7c3913f61322b8c69e186"
    const handleBarCodeScanned = ({ type, data }) => {
        // let { path, queryParams } = Linking.parse(data);
        const [path, targetId] = data.split("=");
        if (path === "product") {
            setScanned(true);
            props.onScan("product", targetId);
        }

    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    const ScannerComponent = props => {
        return Platform.OS === "ios" ? (
            <Scanner
                {...props}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            >{props.children}</Scanner>
        ) : (
                <Scanner
                    {...props}
                    ratio="1:1"
                    barCodeScannerSettings={{
                        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
                    }}
                    
                >{props.children}</Scanner>
            )
    };

    return (
        <ScannerComponent
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        >
            <Image source={require("../assets/qrcode-overlay.png")} style={{ width: "100%", height: "100%" }} />
        </ScannerComponent>
    );
}

export default QrScanner;
