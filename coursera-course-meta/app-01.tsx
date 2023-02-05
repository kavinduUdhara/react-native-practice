import * as React from "react";
import { View } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import Footer from "./components/Footer";
import LittleLemonFooter from "./components/LittleLemonFooter";

const App = ()=> {
    return(
        <View
            style={{
                flex: 1,
                backgroundColor: 'white', //#495E57
            }}>
            <LittleLemonHeader />
            <WelcomeScreen />
            <View
            style={{
                display: 'flex',
                marginTop: 'auto'
            }}>
                <LittleLemonFooter />
            </View>
        </View>
    );
};

export default App;