import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';

import { Header, Item, Button, Modal, Input } from '../../components/index';

import styles from './styles';

export default function Home() {
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [visibleItemModal, setVisibleItemModal] = useState(false);
  /* Input States */
  const [timeEndState, setTimeEndState] = useState(0);
  const [memoryTitleState, setMemoryTitleState] = useState('');
  const [memoryBodyState, setMemoryBodyState] = useState('');

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
    <View style={styles.wrapped}>
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
        style={styles.modalContainer}
        onPress={handlerCreateMemoryModal}
      >
        {/* [x] 1 - Adicionar inputs de criação (está salvando no state)
            [] 2 - Salvar ele s no async storage
            [] 3 - Renderizar eles na forma de Item
            [/] 4 - Implementar a visualizaçao das informaçoes do item pela modal dele (será usado id)
            [] 5 - Implementar a a possivel deleçao dos items;
            [] 8 - Fazer a notificação para o Item;
        */}
        <View style={styles.modalHeader}>
          <Button
            iconFamily="MaterialCommunityIcons"
            iconColor="#ffffff"
            iconSize={30}
            iconName="pencil"
            onPress={handlerCreateMemoryModal}
          />
          <Text style={styles.modalHeaderTitle}>Criar Memória</Text>
        </View>

        <View style={styles.modalContent}>
          <Input
            onChangeText={(text) => setTimeEndState(text)}
            keyboardType="numeric"
            placeholder="Em quantos minutos você deve ser lembrado? (Em minutos)"
          />

          <Input
            onChangeText={(text) => setMemoryTitleState(text)}
            keyboardType="default"
            maxLength={50}
            placeholder="Título do que você deve ser lembrado?"
            style={{ width: 300 }}
          />
          <Input
            onChangeText={(text) => setMemoryBodyState(text)}
            keyboardType="default"
            maxLength={100}
            placeholder="Conteúdo da lembrança?"
            style={{ width: 300 }}
          />
        </View>
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
