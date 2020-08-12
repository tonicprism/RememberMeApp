import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import chooseIconFamily from '../../service/chooseIconFamily';

import styles from './styles';

function Button({ iconFamily, iconName, iconSize, iconColor, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {chooseIconFamily(iconFamily, iconName, iconSize, iconColor)}
    </TouchableOpacity>
  );
}
export default Button;
