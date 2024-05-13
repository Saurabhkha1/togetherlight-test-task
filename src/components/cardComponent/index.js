import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './styles';

const CardComponent = ({title, body, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.body}>Title: {title}</Text>
    <View style={styles.hrline} />
    <View style={styles.subText}>
      <Text style={styles.body}>Body: {body}</Text>
    </View>
  </TouchableOpacity>
);

export default CardComponent;
