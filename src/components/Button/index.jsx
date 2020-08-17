import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import chooseIconFamily from '../../service/chooseIconFamily';

import styles from './styles';

function Button({ iconFamily, iconName, iconSize, iconColor, children, style, onPress }) {
  return (
    <>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        {chooseIconFamily(iconFamily, iconName, iconSize, iconColor)}
        {children && <Text style={[styles.text, style]}>{children}</Text>}
      </TouchableOpacity>
    </>
  );
}
export default Button;
