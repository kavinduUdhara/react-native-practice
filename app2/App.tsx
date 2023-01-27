import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, Pressable} from "react-native";
import { Alert } from 'react-native';

export default function App() {
  const [data1, Setdata1] = useState(0);
  var change_data = 0;

  const ui = (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{data1}</Text>
      <Pressable onLongPress={() => chage_the_text1()}>
        <Text>Change</Text>
      </Pressable>
    </SafeAreaView>
  );
  return ui;

  function chage_the_text1(){
    Setdata1(data1 +1);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    margin : 20
  },

  button: {
    margin: 20,
    padding: 20
  }
});

function chage_the_text(text: string){
  Alert.alert('message',text);
}
