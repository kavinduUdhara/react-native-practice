import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
            <Text style={{padding: 30, paddingTop: 40, fontSize: 30, color: 'black', textAlign: 'center'}}>
                little lemon
            </Text>
        </View>
    );
};