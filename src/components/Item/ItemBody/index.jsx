import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function ItemBody({ children }) {
  return <View style={styles.container}>{children}</View>;
}
