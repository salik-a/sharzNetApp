import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    borderColor: '#000000',
    justifyContent: 'center',
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  textInput: {
    width: 300,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: 16,
    flex: 1,
    color: '#000',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
