import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList
} from 'react-native';
import axios from 'axios';

export default class AsyncStorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://mobile-server-ii.herokuapp.com/users').then((response) => {
      this.setState({
        posts: response,
      });
    });
  }

  render() {
    return (
      <View>
        <FlatList 
          data={this.state.posts}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>;
          }}/>
    </View>
    );
  }
}