import React, {useState, useCallback} from 'react';
import {View, Text, TextInputProps, Pressable, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

interface IRezervationCard extends TextInputProps {
  rezervationData: any;
  handleDelete: () => any;
  handleDetail: () => any;
}

const RezervationCard: React.FC<IRezervationCard> = ({
  rezervationData,
  handleDelete,
  handleDetail,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>{rezervationData.userName}</Text>
        <Text>{rezervationData.cityName}</Text>
        <Text>{rezervationData.date}</Text>
        <Text>{rezervationData.time}</Text>
        <Text>{rezervationData.note}</Text>
      </View>
      <Pressable onPress={handleDelete}>
        <Icon name={'trash'} size={24} type="entypo" color="red" />
      </Pressable>
      <Pressable onPress={handleDetail}>
        <Icon
          name={'chevron-thin-right'}
          size={24}
          type="entypo"
          color="gray"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    // height: 75,
  },
  innerContainer: {},
});

export default RezervationCard;
