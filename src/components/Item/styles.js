import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#AAEAFB',
    flexDirection: 'row',
    minHeight: 177,
    marginBottom: 20,
    borderRadius: 30,
    paddingHorizontal: 10,
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

  /* BEGIN CONTAINERS */

  itemBodyContainer: {
    flexDirection: 'column',
    borderColor: '#195C92',
    paddingRight: 5,
    borderRightWidth: 2,
  },

  titleTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* END CONTAINERS */

  descriptionTextTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#ffffff',
  },

  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#ffffff',
    marginLeft: 5,
  },

  buttonsContainerItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 2,
  },

  buttonsContainerModal: {
    minWidth: 300,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
