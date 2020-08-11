import React from 'react';
import { View, Text } from 'react-native';

import { Header, Item } from '../../components/index';

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.wrap}>
      <Header />
      <View style={styles.container}>
        <Item />
        <Item />
      </View>
    </View>
  );
}
