import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import chooseIconFamily from '../../service/chooseIconFamily';

import styles from './styles';

export default function Button({ fontFamily, iconName, iconSize, iconColor, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {chooseIconFamily(fontFamily, iconName, iconSize, iconColor)}
    </TouchableOpacity>
  );
}
