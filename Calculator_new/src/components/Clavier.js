// components/Clavier.js

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

class Clavier extends React.Component {
    render() {
        let rows = [];
        let nums = [['AC', '+/-', '%'], [7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']];

        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity
                        key={nums[i][j]}
                        onPress={() => this.props.buttonPressed(nums[i][j])}
                        style={styles.btn}
                    >
                        <Text style={styles.btntext}>{nums[i][j]}</Text>
                    </TouchableOpacity>
                );
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>);
        }

        return <View style={styles.numbers}>{rows}</View>;
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
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    numbers: {
        flex: 3,
        backgroundColor: '#C9C9C9'
    },
});

export default Clavier;

