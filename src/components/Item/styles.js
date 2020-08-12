import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#AAEAFB',
    flexDirection: 'row',
    minHeight: 177,
    marginBottom: 20,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 30,
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
    marginLeft: 22,
  },
});

export default styles;
