import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './styles'
import Header from './Header';

class MainComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Header />
            </View>
        );
    };
}

export default MainComponent