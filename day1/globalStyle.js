import {StyleSheet} from 'react-native';

export const buttonStyle = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: 'white',
  },
  border: {borderWidth: 1, borderColor: 'gray', backgroundColor: 'red'},
});
