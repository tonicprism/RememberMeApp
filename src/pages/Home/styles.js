import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapped: {
    flex: 1,
  },

  container: {
    backgroundColor: '#ffffff',
    paddingTop: 18,
    padding: 10,
  },

  floatButton: {
    width: 66,
    height: 66,
    borderRadius: 100,
    backgroundColor: '#195C92',
    position: 'absolute',
    bottom: 10,
    right: width / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContainer: {
    flexDirection: 'column',
    padding: 30,
    minHeight: 300,
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  modalHeaderTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 25,
  },

  modalContent: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;
