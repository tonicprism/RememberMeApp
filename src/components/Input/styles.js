import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#549CBC',
    minHeight: 60,
    lineHeight: 30,
    minWidth: 250,
    marginBottom: 10,
    paddingHorizontal: '2%',
    borderRadius: 15,
    color: '#fff',
    // Adding shadow
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default styles;
