import React from "react";
import { Text, View, StyleSheet } from "react-native";

// StyleSheet object to define the styles for the components
const styles = StyleSheet.create({
    // The center style aligns the components at the center of the screen
    center: {
        alignItems: 'center',
    },
});

// Type definition for the properties object passed to the Greeting component
type GreetingProps = {
    name: string;
};

// The Greeting component returns a View component containing a Text component
const Greeting = (properties: GreetingProps) => {
    return (
        // The View component is styled with the center style to align its content at the center of the screen
        <View style={styles.center}>
            //The Text component shows a greeting message with the name property passed from the properties object
            <Text>Hello, {properties.name}!</Text>
        </View>
    );
};

// The LotsOfGreetings component returns a View component showing multiple Greeting components
const LotsOfGreetings = () => {
    return (
        // The View component is styled with the center style, with an additional top offset of 50, to align its content at the center of the screen with a top offset of 50
        <View style={[styles.center, { top: 50 }]}>
            // Three Greeting components are rendered, each with a different name property
            <Greeting name="Rexxar" />
            <Greeting name="Jaina" />
            <Greeting name="Valeera" />
        </View>
    );
};

// Exporting the LotsOfGreetings component as the default export
export default LotsOfGreetings;
