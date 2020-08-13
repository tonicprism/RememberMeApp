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

  /* BEGIN CONTAINERS */

  contentContainer: {
    flexDirection: 'column',
  },

  itemTextTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* END CONTAINERS */

  itemTextTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#ffffff',
  },

  itemText: {
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
    marginLeft: 4,
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
