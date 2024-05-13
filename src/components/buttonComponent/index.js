import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const ButtonComponent = ({
  onPress,
  title,
  disabled,
  loading,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button(disabled), buttonStyle]}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
