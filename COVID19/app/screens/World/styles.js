import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    height:21,
    marginTop: 10,
    marginLeft: 10
  },
  textAlign: {
    textAlign: 'center',
    width: '100%',
    height: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

export default styles;
