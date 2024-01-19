import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ecran from "./src/components/Ecran";
import Clavier from "./src/components/Clavier";
import Touche from "./src/components/Touche";

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

    buttonPressed = (text) => {
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

    operate = (operation) => {
        switch (operation) {
            case '<-':
                let text = this.state.resultText.split('');
                text.pop();
                this.setState({
                    resultText: text.join('')
                });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if (this.state.flag) {
                    const lastChar = this.state.resultText.split('').pop();
    
                    if (this.operations.indexOf(lastChar) > 0) return;
    
                    if (this.state.resultText == "") return;
                    this.setState({
                        resultText: this.state.resultText + operation
                    });
                } else {
                    return;
                }
                break;
        }
    }
    

    render() {
        return (
            <View style={styles.container}>
                <Ecran resultText={this.state.resultText} />
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>{this.state.calculationText}</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        <Clavier buttonPressed={this.buttonPressed} />
                    </View>
                    <View style={styles.operations}>
                        <Touche operate={this.operate} />
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
    calculationText: {
        fontSize: 24,
        color: 'black'
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
});
