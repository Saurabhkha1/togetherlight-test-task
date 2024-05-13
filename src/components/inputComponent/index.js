import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const InputComponent = ({
  placeholder = '',
  name = '',
  setName = () => {},
  isSecure = false,
  error,
  label,
}) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}> {label}</Text> : null}
      <TextInput
        placeholder={placeholder}
        value={name}
        onChangeText={text => {
          setName(text);
        }}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error_text}>{error}</Text> : null}
    </View>
  );
};

export default InputComponent;
