import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  TouchableHighlight,
  AsyncStorage, 
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import axios from 'axios';
const t = require('tcomb-form-native');
import Content from './Content';
const Form = t.form.Form;
const Person = t.struct({
  username: t.String,
  email: t.String,
  password: t.String,
});

const options = {};
    
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.signUp = this.signUp.bind(this);
  }
  static navigationOptions = {
    title: 'SignUp',
  };
  signUp(){
    axios.post('https://mobile-server-ii.herokuapp.com/users', {
    username: this.state.username,
    email: this.state.email,
    password: this.state.password,
  }).then((response) => {
    if(response.data.code === 11000) {
      return this.setState({
        error: 'Email already exists try another',
      });
    }
    AsyncStorage.setItem('token', response.data.token)
    .then(() => {
      this.props.navigate('Content');
    }).catch((error) => {
      return (error);
    });
  });
  }
  render() {
    const { navigate } = this.props.navigation.navigate;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Signup</Text>
        </View>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
        </View>  
        <Text>{this.state.error && this.state.error.length ? this.state.error : null}</Text>
        <TextInput
         style={styles.textInput}
         onChangeText={(username) => this.setState({ username })}
         value = {this.state.username}
        />
        <TextInput
         style={styles.textInput}
         onChangeText={(email) => this.setState({ email })}
         value = {this.state.email}
        />
        <TextInput
         style={styles.textInput}
         onChangeText={(password) => this.setState({ password })}
         value = {this.state.password}
        />
        <Button
          title={'Submit'}
          onPress={() => this.props.navigation.navigate('Content')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

const SignUpRoutes = StackNavigator({
  SignUp: { screen: SignUp },
  Content: { screen: Content },
});

export default SignUpRoutes;