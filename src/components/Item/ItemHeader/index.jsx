import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function ItemHeader({ title, iconName }) {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name={iconName} size={30} color="#ffffff" />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}
