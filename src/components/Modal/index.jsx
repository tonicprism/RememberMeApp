import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Modal from 'react-native-modal';

import styles from './styles';

function _Modal({ isVisible, children, onPress, style }) {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onPress}
      swipeDirection="down"
      onBackdropPress={onPress}
      backdropColor="#ffffff"
      backdropOpacity={0}
    >
      <View onPress={onPress} style={[styles.modalWrapper, style]}>
        {children}
      </View>
    </Modal>
  );
}

export default _Modal;
