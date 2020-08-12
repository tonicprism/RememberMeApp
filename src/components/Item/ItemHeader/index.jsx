import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../Button';

import styles from './styles';

export default function ItemHeader({ title, iconName }) {
  return (
    <View style={styles.container}>
      <Button
        iconFamily="Ionicons"
        style={styles.icon}
        iconName={iconName}
        iconSize={30}
        iconColor="#195C92"
      />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}
