import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

type buttonProps ={
    text: string;
    buttonIcon?: string;
    buttonActivated : boolean;
    onPress?: () => void;
};

const Button = (props: buttonProps) => {
    // Define the button color based on the value of props.buttonActivated
    const buttonColor = props.buttonActivated ? "white" : "#086acc"; // If true => "white". Otherwise, it will be set to "#000".
    const backgroudColor = props.buttonActivated ? "#2c91de"/*blue*/ : "#ebf6ff";

    return(
        <TouchableOpacity style={[styles.button, {backgroundColor: backgroudColor}]} onPress={props.onPress}>
            {props.buttonIcon && <Ionicons name={props.buttonIcon} size={20} color={buttonColor} style={styles.buttonIcon}/>}
            <Text style={[styles.buttonText, {color: buttonColor}]}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
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