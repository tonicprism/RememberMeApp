import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';

import Button from '../Button';

import styles from './styles';

export default function Item({ onPress }) {
  function alertTest() {
    Alert.alert('Teste');
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <View style={styles.contentContainer}>
        <ItemHeader title="Em 10 minutos" iconName="md-time" />
        <ItemBody>
          <Entypo name="text" size={24} color="white" />
          <Text style={styles.itemText}>Enviar vídeo para o grupo da sala</Text>
        </ItemBody>
      </View>
      <View style={[styles.buttonsContainer]}>
        <Button
          fontFamily="AntDesign"
          iconName="checkcircleo"
          iconSize={20}
          iconColor="green"
          style={{ marginVertical: 4 }}
        />
        <Button fontFamily="EvilIcons" iconName="trash" iconSize={40} iconColor="red" style={{}} />
      </View>
    </TouchableOpacity>
  );
}
