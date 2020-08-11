import React from 'react';
import { View, Text, Alert } from 'react-native';

import { Header, Item } from '../../components/index';

import styles from './styles';

export default function Home() {
  function alertTest() {
    Alert.alert('Hello', 'Opa');
  }

  return (
    <View style={styles.wrap}>
      <Header />
      <View style={styles.container}>
        <Item onPress={alertTest} />
        <Item />
      </View>
    </View>
  );
}
