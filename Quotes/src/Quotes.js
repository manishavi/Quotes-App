import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import { quotes } from './data';
import QuotePoster from './QuotePoster';

export default class Quotes extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    {quotes.map((quote, index) => <QuotePoster
                        quotee={quote}
                        onOpen={this.openQuote}
                        key={index}
                    />)}
                </ScrollView>
            </View>
        );
    }
}