import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  Button, 
  Image, 
  TextInput,
  AppRegistry,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Content from './components/Content';
import App from './src/app';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Quotes App',
  };
  render() {
    const { navigate } = this.props.navigation.navigate;
    return (
      <View style={styles.container}>
        <Image 
          style={styles.topImage}
          source={{ uri: 'https://i.pinimg.com/736x/b5/4f/37/b54f37694f85f7b261d79ddd12477968--divination-paganism.jpg'}}
        />
          <Button
          title={'SignUp'}
          onPress={() => this.props.navigation.navigate('SignUp')}
          />
          <Button
          title={'SignIn'}
          onPress={() => this.props.navigation.navigate('SignIn')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    height: 400,
    alignSelf: 'stretch',
  },
});

const Routes = StackNavigator({
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn },
});

export default Routes;
