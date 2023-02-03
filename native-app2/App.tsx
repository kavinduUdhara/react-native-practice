import React from "react";
import { View, Text } from "react-native";

/*
Components: Components are the building blocks of a React Native app.
A component is a piece of code that represents a part of a user interface.
Example:
 */
const Greeting = ({name = "kaivndu"}) => (
  <View>
     <Text>Hello {name}!</Text>
  </View>
);


const App = () => (
  <View>
    <Text>Welcome to React Native!</Text>
  </View>
);

export default App;