// components/Touche.js

import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

class Touche extends React.Component {
    render() {
        let ops = [];
        const operations = ['/', '*', '-', '+', '<-'];

        for (let i = 0; i < 5; i++) {
            ops.push(
                <TouchableOpacity
                    key={operations[i]}
                    style={styles.btn}
                    onPress={() => this.props.operate(operations[i])}
                >
                    {operations[i] === '<-' ? (
                        <Text style={[styles.btntext, styles.white]}>
                            {'<-'}
                        </Text>
                    ) : (
                        <Text style={[styles.btntext, styles.white]}>
                            {operations[i]}
                        </Text>
                    )}
                </TouchableOpacity>
            );
        }

        return <View style={styles.operations}>{ops}</View>;
    }
}

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    btntext: {
        fontSize: 30,
        color: '#323232'
    },
    white: {
        color: 'white'
    },
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: '#5BB0FF'
    }
});

export default Touche;

