import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 30,
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 15,
    margin: 10,
  },
  btnWrapper: {
    padding: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 10,
    margin: 10,
  },
  btnTxt: {
    color: 'white',
  },
  txtColor: {
    color: 'white',
    fontSize: 15,
  },
  blackBg: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 2,
    padding: 10,
  },
});
