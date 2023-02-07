import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                little lemon
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14'
    },
    text: {
        padding: 20,
        paddingTop: 30,
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    }
});