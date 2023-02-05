import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={{ backgroundColor: '#F4CE14' }}>
            <Text style={{padding: 20, paddingTop: 30, fontSize: 30, color: 'black', textAlign: 'center'}}>
                little lemon
            </Text>
        </View>
    );
};