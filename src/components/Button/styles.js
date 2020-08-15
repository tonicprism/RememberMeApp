import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#195C92',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 83,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },

  headerText: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 42,
    color: '#ffffff',
  },

  text: {
    color: '#fff',
    margin: '2%',
    borderWidth: 2,
    borderColor: '#fff',
    padding: '5%',
    paddingHorizontal: '30%',
    borderRadius: 20,
    alignSelf: 'center',
  },
});

export default styles;
