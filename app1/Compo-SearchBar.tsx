import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="search by keyword" style={styles.textInput} autoCorrect={false}/>
            <Ionicons name="search-outline" size={25} color={'#696969'} style={styles.searchImage}/>
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        borderRadius: 25,
        position: 'absolute',
        top: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 10,
        backgroundColor: 'white',
    },
    textInput: {
        width: '85%'
    },
    searchImage: {
        marginLeft: 'auto',
        paddingRight: 20
    }
});