import React from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Header, Item } from '../../components/index';

import styles from './styles';

export default function Home() {
  function alertTest() {
    Alert.alert('Hello', 'Opa');
  }

  return (
    <View style={styles.wrap}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Item onPress={alertTest} />
          <Item onPress={alertTest} />
          <Item onPress={alertTest} />
          <Item />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatButton} onPress={alertTest}>
        <MaterialCommunityIcons name="pencil" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}
