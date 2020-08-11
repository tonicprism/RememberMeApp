import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';

import styles from './styles';

export default function Item() {
  return (
    <View style={styles.itemContainer}>
      <ItemHeader title="Em 10 minutos" iconName="md-time" />
      <ItemBody>
        <Text style={styles.itemText}>Hello</Text>
      </ItemBody>
    </View>
  );
}
