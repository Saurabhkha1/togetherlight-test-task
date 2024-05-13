import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {styles} from './styles';
import InputComponent from '../../components/inputComponent';
import ButtonComponent from '../../components/buttonComponent';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (
      userName?.toLowerCase() === 'admin' &&
      password?.toLocaleLowerCase() === 'admin123'
    ) {
      Alert.alert('Login Successful', 'Go to Dashboard', [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Dashboard'),
        },
      ]);
    } else {
      Alert.alert('Invalid Credentials', 'User name or password invalid');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <InputComponent
          name={userName}
          setName={setUserName}
          placeholder={'Enter Your Username'}
          label={'Username'}
        />
      </View>
      <View>
        <InputComponent
          name={password}
          setName={setPassword}
          placeholder={'Enter Your Password'}
          label={'Password'}
          isSecure={true}
        />
      </View>

      <ButtonComponent
        disabled={!(userName?.length && password?.length)}
        title={'Submit'}
        onPress={handlePress}
      />
    </View>
  );
};

export default LoginScreen;
