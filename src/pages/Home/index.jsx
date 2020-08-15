import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';

import { Header, Item, Button, Modal, Input } from '../../components/index';
import ItemServices from '../../service/itemServices';
import Data from '../../service/DATA';

import styles from './styles';

import moment from 'moment';
import portugueseLanguage from 'moment/locale/pt-br';
moment.locale('pt-br', portugueseLanguage);

export default function Home() {
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [visibleItemModal, setVisibleItemModal] = useState(false);

  /* ITEMS STATES */
  const [items, setItems] = useState([]);
  const itemServices = new ItemServices(items);

  /* INPUTS STATES */
  const [id, setId] = useState('');
  const [timeToRemember, setTimeToRemember] = useState(0);
  const [timeToRememberInTyping, setTimeToRememberInTyping] = useState(0);
  const [titleOfMemory, setTitleOfMemory] = useState('');
  const [titleOfMemoryInTyping, setTitleOfMemoryInTyping] = useState('');
  const [contentOfMemory, setContentOfMemory] = useState('');
  const [contentOfMemoryInTyping, setContentOfMemoryInTyping] = useState('');

  function store(item) {
    const findItem = items.find((item) => item.id === items.id);
    if (findItem) return alert('Already exist a item with this id');
    return items === null ? setItems([item]) : setItems([...items, item]);
  }

  function index() {
    return items;
  }

  function remove(itemId) {
    setItems([items.splice(itemId, -1)]);
  }

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
          {items.map((item) => (
            <Item
              key={item.id}
              timeToRemember={item.timeToRemember}
              titleOfMemory={item.titleOfMemory}
              contentOfMemory={item.contentOfMemory}
              createdAtDate={item.createdAtDate}
              createdAtHours={item.createdAtHours}
              deleteItem={alert()}
            />
          ))}
        </View>
      </ScrollView>

      <Modal
        isVisible={visibleCreateModal}
        style={styles.modalContainer}
        onPress={handlerCreateMemoryModal}
      >
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
            onChangeText={(text) => setTimeToRemember(text)}
            keyboardType="numeric"
            placeholder="Em quantos minutos você deve ser lembrado? (Em minutos)"
            style={{ minWidth: 300 }}
          />

          <Input
            onChangeText={(text) => setTitleOfMemory(text)}
            keyboardType="default"
            maxLength={50}
            placeholder="Título do que você deve ser lembrado?"
            style={{ minWidth: 300 }}
          />
          <Input
            onChangeText={(text) => setContentOfMemory(text)}
            keyboardType="default"
            maxLength={100}
            placeholder="Conteúdo da lembrança?"
            style={{ minWidth: 300 }}
          />
        </View>
        <Button
          onPress={() => {
            handlerCreateMemoryModal();
            setId(id + 1);
            setItems([
              ...items,
              {
                id: id,
                timeToRemember: timeToRemember,
                titleOfMemory: titleOfMemory,
                contentOfMemory: contentOfMemory,
                createdAtDate: moment().format('L'),
                createdAtHours: moment().format('LT'),
                timeStamp: moment().format(),
              },
            ]);
          }}
        >
          <Text>Create Item</Text>
        </Button>
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
