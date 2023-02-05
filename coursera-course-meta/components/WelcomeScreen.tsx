import React from "react";
import { Text, View } from "react-native";

export default function() {
    return(
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text
                style={{
                    fontSize: 40,
                    padding: 40,
                    textAlign: 'center'
                }}>
                Welcome to little lemon
            </Text>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 22,
                    padding: 30
                }}>
                Little Lemon is a charming neighborhood bistro that serves simple 
                food and classic cocktails in a lively but casual environment. We would 
                love to hear more about your experience with us!
            </Text>
        </View>
    );
};