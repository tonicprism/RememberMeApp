import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../Button';

import styles from './styles';

export default function ItemHeader({ title, iconName, iconFamily, color, fontSize, onPress }) {
  return (
    <View style={styles.container}>
      <Button
        iconFamily={iconFamily ? iconFamily : 'Ionicons'}
        style={styles.icon}
        iconName={iconName}
        iconSize={fontSize}
        iconColor={color}
        onPress={onPress}
      />
      <Text style={[styles.titleText, { color: color, fontSize: fontSize }]}>{title}</Text>
    </View>
  );
}
