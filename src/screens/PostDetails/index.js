import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const PostDetailsScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.idText}>User Id: {item?.userId}</Text>
        <Text style={styles.title}>Title: {item?.title}</Text>
        <Text style={styles.description}>Description: {item?.body}</Text>
      </View>
    </View>
  );
};

export default PostDetailsScreen;
