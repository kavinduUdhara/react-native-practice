import React from "react";
import { View, Text } from "react-native";

export default function footer() {
    return(
        <View style={{ justifyContent: "flex-end", backgroundColor: 'white'}}>
            <Text style={{ backgroundColor: '#F4CE14', padding: 5,textAlign: 'center' }}>All rights reserved by Little Lemon, 2022</Text>
        </View>
    );
};