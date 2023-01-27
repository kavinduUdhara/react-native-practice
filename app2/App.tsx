import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, Pressable} from "react-native";
import { Alert } from 'react-native';

export default function App() {
  const [data1, data2] = useState('data1');

  const ui = (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{data1}</Text>
      <Button title="change" onPress={() => chage_the_text1('sucess')}/>
    </SafeAreaView>
  );
  return ui;

  function chage_the_text1(text: string){
    data2('data2');
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
