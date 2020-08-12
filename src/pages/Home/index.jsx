import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';

import { Header, Item, Button, Modal } from '../../components/index';

import styles from './styles';

export default function Home() {
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [visibleItemModal, setVisibleItemModal] = useState(false);
  function alertTest() {
    Alert.alert('Hello', 'Opa');
  }

  function handlerOpenItemModal() {
    setVisibleItemModal(!visibleItemModal);
  }

  function handlerCreateMemoryModal() {
    setVisibleCreateModal(!visibleCreateModal);
  }

  return (
    <View style={styles.wrap}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Item handlerModal={handlerOpenItemModal} visibleModal={visibleItemModal} />
          <Item handlerModal={handlerOpenItemModal} visibleModal={visibleItemModal} />
          <Item handlerModal={handlerOpenItemModal} visibleModal={visibleItemModal} />
          <Item handlerModal={handlerOpenItemModal} visibleModal={visibleItemModal} />
        </View>
      </ScrollView>

      <Modal
        isVisible={visibleCreateModal}
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={handlerCreateMemoryModal}
      >
        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Hello</Text>
        <Button
          iconFamily="MaterialCommunityIcons"
          iconColor="#ffffff"
          iconSize={30}
          iconName="close"
          onPress={handlerCreateMemoryModal}
        />
      </Modal>

      <Button
        style={styles.floatButton}
        iconColor="#ffffff"
        iconSize={30}
        iconName={visibleCreateModal || visibleItemModal ? 'close' : 'pencil'}
        iconFamily="MaterialCommunityIcons"
        onPress={handlerCreateMemoryModal}
      />
    </View>
  );
}
