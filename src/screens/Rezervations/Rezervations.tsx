import React, {useCallback, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import styles from './Rezervations.style';
import RezervationCard from './RezervationCard';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import RezervationsServices from '../../services/rezervationServices';
import uuid from 'react-native-uuid';
const Rezervations = () => {
  const [rezervationList, setRezervationList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const rezervationsServices = new RezervationsServices();

  useFocusEffect(
    useCallback(() => {
      rezervationsServices
        .getAllRezervations()
        .then(res => {
          if (res?.data) {
            setRezervationList(res?.data);
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

  const handleDelete = useCallback(
    (id: any) => {
      setLoading(true);
      rezervationsServices
        .deleteRezervation(id)
        .then(res => {
          const newList = rezervationList.filter(item => item.id !== id);
          setRezervationList(newList);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [rezervationList],
  );

  const keyExtractor = useCallback(() => uuid.v4().toString(), []);

  const renderItem = useCallback(
    ({item, index}: {item: any; index: number}) => {
      return (
        <RezervationCard
          handleDelete={() => handleDelete(item.id)}
          handleDetail={() =>
            navigation.navigate('RezervationDetail', {item: item})
          }
          rezervationData={item}
        />
      );
    },
    [handleDelete],
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Rezervasyonlar</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Rezervasyonlar</Text>
      <View style={styles.innerContainer}>
        <FlatList
          data={rezervationList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default Rezervations;
