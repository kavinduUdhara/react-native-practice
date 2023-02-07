import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import Footer from "./components/Footer";
import LittleLemonFooter from "./components/LittleLemonFooter";
import footer from "./components/Footer";

const App = ()=> {
    return(
        <View style={styles.container}>
            <LittleLemonHeader />
            <WelcomeScreen />
            <View style={styles.footer}>
                <LittleLemonFooter />
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    footer: {
        display: "flex",
        marginTop: 'auto'
    }
});