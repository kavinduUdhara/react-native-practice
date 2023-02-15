import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

type inputFeildProps = {
    name: string;
    banner: string;
    secutiry: boolean;
};

const InputFeild = (props: inputFeildProps) => {
    return(
        <View style={styles.inputFeild}>
            <Ionicons name={props.banner} size={20} style={styles.InputFeildBanner}/>
            <TextInput placeholder={props.name} secureTextEntry={props.secutiry} style={styles.InputFeildTextInput}/>
        </View>
    );
};

export default InputFeild;

const styles = StyleSheet.create({
    container: {
        width: '100%',
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