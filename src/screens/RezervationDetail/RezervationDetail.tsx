import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './RezervationDetail.style';
import {InputCard} from '../../components';
import {Button} from 'react-native-elements';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import RezervationsServices from '../../services/rezervationServices';
import {storage} from '../../services/storage';

const RezervationDetail = ({route}) => {
  const [rezervationInfos, setRezervationInfos] = useState(route?.params?.item);
  const [userInfos, setUserInfos] = useState({
    userName: '',
  });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(route?.params?.item?.cityName);
  const [items, setItems] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const navigation = useNavigation();
  const rezervationsServices = new RezervationsServices();

  useFocusEffect(
    useCallback(() => {
      const jsonUser = storage.getString('userInfos');
      const userObject = JSON.parse(jsonUser);
      setUserInfos(userObject);
      rezervationsServices
        .getAllCoordinates()
        .then(res => {
          if (res?.data) {
            const newData = res?.data?.map((item: any) => {
              return {label: item.cityName, value: item.cityName, ...item};
            });
            setItems(newData);
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []),
  );

  const handleDate = useCallback(
    (text: string) => {
      setRezervationInfos(ex => ({...ex, date: text}));
    },
    [rezervationInfos],
  );
  const handleTime = useCallback(
    (text: string) => {
      setRezervationInfos(ex => ({...ex, time: text}));
    },
    [rezervationInfos],
  );

  const handleNote = useCallback(
    (text: string) => {
      setRezervationInfos(ex => ({...ex, note: text}));
    },
    [rezervationInfos],
  );

  const handleRezervationDetail = useCallback(() => {
    if (
      rezervationInfos.date !== '' &&
      rezervationInfos.time !== '' &&
      rezervationInfos.note !== '' &&
      value !== null
    ) {
      const selectedCity = items.find(city => city.cityName === value);
      rezervationsServices
        .updateRezervationDetail(rezervationInfos.id, {
          userName: userInfos?.userName,
          cityName: selectedCity.cityName,
          date: rezervationInfos.date,
          time: rezervationInfos.time,
          note: rezervationInfos.note,
          latitude: selectedCity.latitude,
          longitude: selectedCity.longitude,
        })
        .then(res => {
          console.log(res.data);
          navigation.navigate('Rezervations');
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setShowWarning(true);
    }
  }, [rezervationInfos, navigation, items, value]);
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Rezervasyon Güncelle</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Kullanıcı Adı</Text>
        <InputCard
          editable={false}
          value={userInfos?.userName}
          onChangeText={handleDate}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Tarih</Text>
        <InputCard
          value={route?.params?.item?.date}
          placeholder="Tarih"
          onChangeText={handleDate}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Saat</Text>
        <InputCard
          value={route?.params?.item?.time}
          placeholder="Saat"
          onChangeText={handleTime}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Not Ekle</Text>
        <InputCard
          defaultValue={route?.params?.item?.note}
          placeholder="Not Ekle"
          onChangeText={handleNote}
        />
      </View>
      <View style={styles.inputContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          placeholder={'Şehir Seçin'}
          placeholderStyle={styles.placeholderText}
          textStyle={styles.placeholderText}
          showArrowIcon={true}
          style={styles.inputContainerStyle}
          dropDownContainerStyle={styles.dropdown}
          selectedItemContainerStyle={{backgroundColor: 'lightgray.'}}
          showTickIcon={false}
        />
      </View>

      {showWarning && (
        <Text style={styles.warningText}>Tüm Bilgileri Doğru Doldurunuz</Text>
      )}
      <Button
        title="Rezervasyon Güncelle"
        loading={loading}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={styles.loginButton}
        containerStyle={[
          styles.buttonContainer,
          {
            marginTop: 50,
          },
        ]}
        onPress={handleRezervationDetail}
      />
    </View>
  );
};

export default RezervationDetail;
