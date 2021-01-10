import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class FullImage extends Component {
  render() {
    const image = this.props.route.params.image;
    return (
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.img} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C3C40',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
