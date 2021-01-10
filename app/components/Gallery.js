import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import {Badge} from 'react-native-paper';

import {connect} from 'react-redux';
import {fetchImages} from '../store/actions/imagesAction';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.imgBlock}
        onPress={() => this.openFullImage(item.urls.regular)}>
        <View style={styles.imgContainer}>
          <Image source={{uri: item.urls.small}} style={styles.img} />
          <View style={styles.badge}>
            <Badge>{item.likes}</Badge>
          </View>
          <View style={styles.author}>
            <Text style={styles.text}>{item.user.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  openFullImage = (image) => {
    const {navigate} = this.props.navigation;
    return navigate('FullImage', {image});
  };

  render() {
    return (
      <FlatList
        numColumns={2}
        data={this.props.data}
        keyExtractor={(item) => item.id}
        renderItem={this._renderItem}
        columnWrapperStyle={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
    backgroundColor: '#3C3C40',
  },
  img: {
    width: '100%',
    height: 200,
  },
  imgContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 10,
  },
  imgBlock: {
    width: '49%',
  },
  author: {
    position: 'absolute',
    bottom: 5,
    left: 10,
    backgroundColor: '#7f7887',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
  badge: {
    position: 'absolute',
    top: '4%',
    right: '2%',
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.fetchImages.images,
  };
};

export default connect(mapStateToProps, {fetchImages})(Gallery);
