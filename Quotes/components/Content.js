import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import axios from 'axios';


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: 123,
    };
  }

  componentDidMount() {
    axios.get('https://mobile-server-ii.herokuapp.com/users').then((response) => {
      this.setState({
        posts: response,
      });
    });
  }

  static navigationOptions = {
    title: 'Content'
  }

  render() {
    return (
      <View>
        <FlatList 
          data={this.state}
          renderItem={({ item }) => {
            return <Text>{item.text}</Text>;
          }}/>
      </View>
    );
  }
}

