import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  inputContainer: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 20,
  },
  labelText: {
    color: 'black',
  },
  warningText: {
    color: 'red',
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 50,
    width: 200,
    marginVertical: 20,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 5,
  },
  signUpButton: {
    borderRadius: 5,
    borderWidth: 1,
  },
  placeholderText: {
    color: 'black',
    fontSize: 16,
  },

  inputContainerStyle: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1C3F95',
    height: 50,
    width: 300,
    fontSize: 20,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    marginTop: 8,
    alignSelf: 'center',
  },
  dropdown: {
    width: 300,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#ffffff',
  },
});
