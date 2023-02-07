import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

export default function() {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.welcomeText}>
                Welcome to little lemon
            </Text>
            <Text style={styles.text}>
                Little Lemon is a charming neighborhood bistro that serves simple 
                food and classic cocktails in a lively but casual environment. We would 
                love to hear more about your experience with us!
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcomeText: {
        fontSize: 50,
        padding: 40,
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
        padding: 30
    }
});