import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';
import Modal from '../Modal';

import Button from '../Button';

import styles from './styles';

export default function Item({ handlerModal, visibleModal }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlerModal} style={styles.contentContainer}>
        <ItemHeader title="Em 10 minutos" iconName="md-time" />
        <ItemBody>
          <Button iconFamily="Entypo" iconName="text" iconSize={20} iconColor="#ffffff" />
          <Text style={styles.itemText}>Enviar vídeo para o grupo da sala</Text>
        </ItemBody>
      </TouchableOpacity>

      <View style={[styles.buttonsContainer]}>
        <Button
          iconFamily="AntDesign"
          iconName="checkcircleo"
          iconSize={20}
          iconColor="green"
          style={{ marginVertical: 4 }}
        />
        <Button iconFamily="EvilIcons" iconName="trash" iconSize={35} iconColor="red" style={{}} />
      </View>

      <Modal
        isVisible={visibleModal}
        onPress={handlerModal}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={styles.itemText}>Hello</Text>
        <Button
          iconFamily="MaterialCommunityIcons"
          iconColor="#ffffff"
          iconSize={30}
          iconName="close"
          onPress={handlerModal}
        />
      </Modal>
    </View>
  );
}
