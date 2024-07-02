import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Login.style';
import {InputCard} from '../../components';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../services/storage';

const Login = () => {
  const [userInfos, setUserInfos] = useState({
    userName: '',
    password: '',
  });
  const [showWarning, setShowWarning] = useState(false);
  const navigation = useNavigation();

  const handleUserName = useCallback(
    (text: string) => {
      setUserInfos({...userInfos, userName: text});
    },
    [userInfos],
  );
  const handlePassword = useCallback(
    (text: string) => {
      setUserInfos({...userInfos, password: text});
    },
    [userInfos],
  );

  const handleLogin = useCallback(
    (text: string) => {
      if (userInfos.userName !== '' && userInfos.password !== '') {
        const hasUsername = storage.contains('userInfos');
        if (hasUsername) {
          const jsonUser = storage.getString('userInfos');
          const userObject = JSON.parse(jsonUser);
          if (
            userInfos.userName === userObject?.userName &&
            userInfos.password === userObject?.password
          ) {
            navigation.navigate('Main');
          } else {
            setShowWarning(true);
          }
        }
      } else {
        setShowWarning(true);
      }
    },
    [userInfos, navigation],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Hoşgeldiniz</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Kullanıcı Adı</Text>
        <InputCard placeholder="Kullanıcı Adı" onChangeText={handleUserName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Şifre</Text>
        <InputCard placeholder="Şifre" onChangeText={handlePassword} />
      </View>
      {showWarning && (
        <Text style={styles.warningText}>Kullanıcı Bulunamadı</Text>
      )}
      <Button
        title="Giriş Yap"
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={styles.loginButton}
        containerStyle={[
          styles.buttonContainer,
          {
            marginTop: 50,
          },
        ]}
        onPress={handleLogin}
      />
      <Button
        title="Kayıt Ol"
        type="outline"
        buttonStyle={styles.signUpButton}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default Login;
