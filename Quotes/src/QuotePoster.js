import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');

const cols = 1, rows = 1;

export default class QuotePoster extends Component { 
    static propTypes = {
        quote: PropTypes.object.isRequired,
        onOpen: PropTypes.func.isRequired,
    }

    render() {
        const { quote, quote: { title, author, poster}, onOpen } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onOpen(quote)}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: poster }} style={styles.image} />
                </View>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.author} numberOfLines={1}>{author}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  author: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
});