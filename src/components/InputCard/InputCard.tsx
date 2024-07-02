import React, {useState, useCallback} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  Pressable,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import styles from './InputCard.style';
import {Icon} from 'react-native-elements';

interface IInputCard extends TextInputProps {
  placeholder?: string;
  containerStyle?: ViewStyle;
}

const InputCard: React.FC<IInputCard> = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  containerstyle,
  ...rest
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const handleChangeVisible = useCallback(() => {
    setIsSecure((ex: boolean) => !ex);
  }, []);
  return (
    <View style={StyleSheet.flatten([styles.container, containerstyle])}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        style={styles.textInput}
        placeholderTextColor={'gray'}
        {...rest}
      />
      {secureTextEntry && (
        <Pressable onPress={handleChangeVisible}>
          <Icon
            name={isSecure ? 'eye-with-line' : 'eye'}
            size={24}
            type="entypo"
            color="gray"
          />
        </Pressable>
      )}
    </View>
  );
};

export default InputCard;
