import * as React from "react";
import { View } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";

const App = ()=> {
    return(
        <View
            style={{
                flex: 1,
                backgroundColor: '#495E57',
            }}>
            <LittleLemonHeader />
        </View>
    );
};

export default App;