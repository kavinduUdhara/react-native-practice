import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from './components/Button';
import InputFeild from './components/InputFeild';

const App = () => {

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, paddingTop: 10, paddingBottom: 40}}>
                <View style={styles.emptyProfile}>
                    <Ionicons name="person-add-outline" size={50} />
                </View>
                <View style={styles.inputFeilds}>
                    <InputFeild name="user_name" banner="at-outline" secutiry={false} />
                    <InputFeild name="phone number +94 714282933" banner="call-outline" secutiry={false} />
                    <InputFeild name="password" banner="lock-closed-outline" secutiry={true} />
                    <InputFeild name="re enter your password" banner="sync-outline" secutiry={true} />
                    <InputFeild name="country" banner="planet-outline" secutiry={false} />
                    <InputFeild name="country" banner="planet-outline" secutiry={false} />
                    <InputFeild name="country" banner="planet-outline" secutiry={false} />
                </View>
                <View style={styles.actions}>
                    <Button buttonIcon="log-in-outline" text="Sign Up" buttonActivated={true} />
                    <Button buttonIcon="arrow-back-outline" text="Back to Sign In" buttonActivated={false}
                        onPress={() => {

                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default App;

const buttonColor = 'blue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyProfile: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        backgroundColor: '#e8e8e8',
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputFeilds: {
        paddingHorizontal: 30,
        width: '100%',
        alignItems: 'center',
        marginTop: 30
    },
    inputFeild: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 35,
        alignItems: 'center',
        marginTop: 20,
        //shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 10,
    },
    InputFeildBanner: {
        paddingLeft: 15,
        paddingRight: 2,
    },
    InputFeildTextInput: {
        width: '83%'
    },
    actions: {
        marginTop: 20,
        flexDirection: 'row'
    },
    button: {
        marginTop: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 6,
        alignItems: 'center'
    },
    buttonIcon: {
        paddingRight: 5
    },
    buttonText: {
        fontSize: 18
    }
});