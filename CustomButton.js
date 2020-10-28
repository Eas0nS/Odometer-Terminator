import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const customButton = props => {
    const content = (
        <View style={[styles.button, { backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
    return<TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        // padding: 16,
        width: 200,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
});

export default customButton;