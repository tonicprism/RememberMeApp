import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#AAEAFB',
    flexDirection: 'row',
    minHeight: 177,
    marginBottom: 20,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 30,
    // Adding shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  contentContainer: {
    flexDirection: 'column',
  },

  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#ffffff',
  },

  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
});

export default styles;
