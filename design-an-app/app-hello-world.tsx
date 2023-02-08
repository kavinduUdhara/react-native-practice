import React from "react";
import { Text, View } from "react-native";

// HelloWorldApp component that returns a View component with centered Text component
const HelloWorldApp = () => {
  return (
    <View
      // Style object to position the View component in the center of the screen
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default HelloWorldApp;
