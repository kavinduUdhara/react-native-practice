import React from "react";
import { SafeAreaView, Text, Button, StyleSheet} from "react-native";

function app(){
  const ui = (
    <SafeAreaView style=(styles.mian)>
      <Text>Hello world</Text>
      <Button title="change"/>
    </SafeAreaView>
  );

  return ui;
}

export default app;

const styles = StyleSheet.create(
  {
    main:{
      flex: 1,
      justifyContent: 'center',
      alignItems : "center"
    },
    text:{
      fontSize : 24,
      fontWeight : "bold"
    }
  }
);