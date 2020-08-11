import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';

import styles from './styles';

export default function Item({ onPress }) {
  function alertTest() {
    Alert.alert('Teste');
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <ItemHeader title="Em 10 minutos" iconName="md-time" />
      <ItemBody>
        <Text style={styles.itemText}>Enviar vídeo para o grupo da sala</Text>
      </ItemBody>
    </TouchableOpacity>
  );
}
