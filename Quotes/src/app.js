import React, { Component } from 'react';
import { 
    Navigator, 
} from 'react-native';
import Quotes from './Quotes';

const RouteMap = (route, navigator) => {
    if (route.name === 'quotes') {
        return <Quotes navigator = {navigator} />;
    }
};

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'qoutes' }}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                renderScene={RouteMap}
            />
        );
    }
}