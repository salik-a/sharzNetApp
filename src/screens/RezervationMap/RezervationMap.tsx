import React, {useCallback, useRef, useState} from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import styles from './RezervationMap.style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import RezervationsServices from '../../services/rezervationServices';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.000000922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_REGION = {
  latitude: 41.046419,
  longitude: 29.033115,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const RezervationMap = () => {
  const navigation = useNavigation();
  const [rezervationList, setRezervationList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Rezervasyon Haritası</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Rezervasyon Haritası</Text>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{flex: 1}}
        region={INITIAL_REGION}>
        {rezervationList.map((marker, index) => {
          console.log({
            latitude: Number(marker.latitude),
            longitude: Number(marker.longitude),
          });
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: Number(marker.latitude),
                longitude: Number(marker.longitude),
              }}
              title={marker.cityName}
              description={marker.userName}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default RezervationMap;
