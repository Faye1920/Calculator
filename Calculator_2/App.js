import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image
} from "react-native";

import deleteIcon from "./src/assets/icons/delete.png";

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            resultText: "",
            calculationText: "",
            flag: true
        }
        this.operations = ['/', '*', '-', '+', 'DEL']
    }

    calculateResult() {
        const text = this.state.resultText
        console.log(text)
        this.setState({
            calculationText: eval(text)
        })
    }

    validate() {
        const text = this.state.resultText
        switch (text.slice(-1)) {
            case '+':
            case '-':
            case '*':
            case '/':
                return false
        }
        return true
    }

    buttonPressed(text) {
        if (text == "AC") {
            this.setState({
                resultText: "",
                calculationText: ""
            })
        } else if (text == "+/-") {
            if (this.state.resultText !== "") {
                const firstChar = this.state.resultText.charAt(0);
                if (firstChar === '-') {
                    this.setState(prevState => ({
                        resultText: prevState.resultText.slice(1)
                    }));
                } else {
                    this.setState(prevState => ({
                        resultText: '-' + prevState.resultText
                    }));
                }
            }
        } else if (text == "%") {
            const result = parseFloat(this.state.resultText) / 100;
            this.setState({
                resultText: result.toString()
            })
        } else if (text == "=") {
            this.setState({
                resultText: "",
                flag: false
            })
            return this.calculateResult()
        } else if (text == ".") {
            if (this.state.resultText === "") {
                this.setState({
                    resultText: "0."
                });
            } else if (this.state.resultText.indexOf(".") === -1) {
                this.setState({
                    resultText: this.state.resultText + text
                });
            }
        } else {
            this.setState({
                resultText: this.state.resultText + text,
                flag: true
            })
        }
    }

    operate(operation) {
        switch (operation) {
            case 'DEL':
                console.log(this.state.resultText)
                let text = this.state.resultText.split('')
                text.pop()
                this.setState({
                    resultText: text.join('')
                })
                break
            case '+':
            case '-':
            case '*':
            case '/':
                if (this.state.flag) {
                const lastChar = this.state.resultText.split('').pop()

                if (this.operations.indexOf(lastChar) > 0) return

                if (this.state.text == "") return
                this.setState({
                    resultText: this.state.resultText + operation
                })
            } else {
                return 
            }
        }
    }

    render() {
        let rows = []
        let nums = [['AC', '+/-', '%'], [7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']]
        for (let i = 0; i < 5; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
                        <Text style={styles.btntext}>{nums[i][j]}</Text>
                    </TouchableOpacity>)
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>)
        }

        let ops = []
        for (let i = 0; i < 5; i++) {
            ops.push(
                <TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={() => this.operate(this.operations[i])}>
                    {this.operations[i] === 'DEL' ? (
                        <Image source={deleteIcon} style={styles.icon} />
                    ) : (
                        <Text style={[styles.btntext, styles.white]}>{this.operations[i]}</Text>
                    )}
                </TouchableOpacity>)
        }

        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.state.resultText}</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>{this.state.calculationText}</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                        {ops}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultText: {
        fontSize: 30,
        color: 'black'
    },
    btntext: {
        fontSize: 30,
        color: '#323232'
    },
    white: {
        color: 'white'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    calculationText: {
        fontSize: 24,
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    result: {
        flex: 2,
        backgroundColor: '#F2F8FF',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttons: {
        flexGrow: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        backgroundColor: '#C9C9C9'
    },
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: '#5BB0FF'
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: 'white'
    }
})
