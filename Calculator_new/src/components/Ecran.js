// components/Ecran.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Ecran extends React.Component {
    render() {
        return (
            <View style={styles.result}>
                <Text style={styles.resultText}>{this.props.resultText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    result: {
        flex: 2,
        backgroundColor: '#F2F8FF',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    resultText: {
        fontSize: 30,
        color: 'black'
    },
});

export default Ecran;
