import React, { Component } from 'react';
import {
    View,
    Header
} from 'react-native';
import styles from './styles'

class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Hey there</Text>
            </View>
        );
    };
}

export default Header