import * as React from "react";
import { View } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import Footer from "./components/Footer";

const App = ()=> {
    return(
        <View
            style={{
                flex: 1,
                backgroundColor: '#495E57',
            }}>
            <LittleLemonHeader />
            <Footer />
        </View>
    );
};

export default App;