import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './SignUp.style';
import {InputCard} from '../../components';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../services/storage';

const SignUp = () => {
  const [userInfos, setUserInfos] = useState({
    userName: '',
    password: '',
    rePassword: '',
  });
  const [showWarning, setShowWarning] = useState(false);
  const navigation = useNavigation();

  const handleUserName = useCallback(
    (text: string) => {
      setUserInfos(ex => ({...ex, userName: text}));
    },
    [userInfos],
  );
  const handlePassword = useCallback(
    (text: string) => {
      setUserInfos(ex => ({...ex, password: text}));
    },
    [userInfos],
  );

  const handleRePassword = useCallback(
    (text: string) => {
      setUserInfos(ex => ({...ex, rePassword: text}));
    },
    [userInfos],
  );

  const handleSignUp = useCallback(() => {
    if (userInfos.password !== userInfos.rePassword) {
      setShowWarning(true);
    } else if (
      userInfos.userName !== '' &&
      userInfos.password !== '' &&
      userInfos.rePassword !== ''
    ) {
      // Serialize the object into a JSON string
      storage.set('userInfos', JSON.stringify(userInfos));
      navigation.navigate('Login');
    }
  }, [userInfos, navigation]);
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
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Şifre Tekrar</Text>
        <InputCard placeholder="Şifre Tekrar" onChangeText={handleRePassword} />
      </View>
      {showWarning && (
        <Text style={styles.warningText}>Tüm Bilgileri Doğru Doldurunuz</Text>
      )}
      <Button
        title="Kayıt Ol"
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={styles.loginButton}
        containerStyle={[
          styles.buttonContainer,
          {
            marginTop: 50,
          },
        ]}
        onPress={handleSignUp}
      />
      <Button
        title="Giriş Yap"
        type="outline"
        buttonStyle={styles.signUpButton}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignUp;
