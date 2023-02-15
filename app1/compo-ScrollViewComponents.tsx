import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScrollViewCompo = () => {
    return(
        <ScrollView style={styles.continer}>
            <View style={styles.title}>
                <Text style={styles.titleText}>What's new</Text>
                <Ionicons name="albums-outline" style={styles.titleImage}/>
            </View>
            <ScrollView>
                
            </ScrollView>
        </ScrollView>
    );
};

export default ScrollViewCompo;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        paddingTop: 70,
        paddingHorizontal: 20
    },
    title: {
        flexDirection: 'row',
        fontSize: 50,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 25
    },
    titleImage: {
        fontSize: 26,
        paddingLeft: 10
    }
});