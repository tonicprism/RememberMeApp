import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';

import { Header, Item, Button, Modal, Input } from '../../components/index';
import ItemServices from '../../service/itemServices';
import Data from '../../service/DATA';

import styles from './styles';

import moment from 'moment';

export default function Home() {
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [visibleItemModal, setVisibleItemModal] = useState(false);
  const [visibleNoItemsModal, setVisibleNoItemsModal] = useState(false);

  /* ITEMS STATES */
  const [items, setItems] = useState([]);
  const itemServices = new ItemServices(items);

  /* INPUTS STATES */
  const [id, setId] = useState('');
  const [itemId, setItemId] = useState(1);
  const [itemRemoved, setItemRemoved] = useState('');
  const [timeToRemember, setTimeToRemember] = useState('');
  const [titleOfMemory, setTitleOfMemory] = useState('');
  const [contentOfMemory, setContentOfMemory] = useState('');

  function storeItem() {
    if (timeToRemember === '') {
      alert('Miss some field, please try again...');
      setVisibleCreateModal(!visibleCreateModal);
    } else {
      handlerCreateMemoryModal();
      setId(id + 1);
      setItems([
        ...items,
        {
          id: id,
          timeToRemember: Math.round(timeToRemember * 60),
          titleOfMemory: titleOfMemory,
          contentOfMemory: contentOfMemory,
          createdAtDate: moment().format('L'),
          createdAtHours: moment().format('LT'),
          timeStamp: moment().format(),
        },
      ]);
    }
  }

  function indexItems() {
    return items;
  }

  function removeAllItem() {
    setItems([]);
  }

  function alertTest1() {
    Alert.alert('Alerta de teste 1', 'teste');
  }

  function alertTest2() {
    Alert.alert('Alerta de teste 2', 'teste');
  }

  function handlerOpenItemModal() {
    setVisibleItemModal(!visibleItemModal);
  }

  function handlerCreateMemoryModal() {
    setVisibleCreateModal(!visibleCreateModal);
  }

  /**const ItemsUpdate = () => {
    const { data: items } = useSWR(indexItems, {
      revalidateOnMount: true,
      refreshInterval: 3000,
      loadingTimeout: 4000,
      errorRetryInterval: 5000,
    });
  };*/

  return (
    <View style={styles.wrapped}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          {console.log(items)}
          {items.length < 1 ? (
            <View
              style={{
                marginVertical: '50%',
                minHeight: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: '#195C92', fontSize: 20 }}>No have memories at here...</Text>
            </View>
          ) : (
            items.map((item) => (
              <Item
                key={item.id}
                itemId={itemId}
                timeToRemember={Math.round(item.timeToRemember / 60)}
                titleOfMemory={item.titleOfMemory}
                contentOfMemory={item.contentOfMemory}
                createdAtDate={item.createdAtDate}
                createdAtHours={item.createdAtHours}
                confirmButton={alertTest1}
                deleteButton={removeAllItem}
                handlerModal={handlerOpenItemModal}
                visibleModal={visibleItemModal}
              />
            ))
          )}
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
            onChangeText={(value) => setTimeToRemember(value)}
            defaultValue={timeToRemember}
            keyboardType="numeric"
            placeholder="Em quantos minutos você deve ser lembrado? (Em minutos)"
            clearTextOnFocus={true}
            style={{ minWidth: 300 }}
          />

          <Input
            onChangeText={(text) => setTitleOfMemory(text)}
            keyboardType="default"
            defaultValue={titleOfMemory}
            maxLength={50}
            placeholder="Título do que você deve ser lembrado?"
            clearTextOnFocus={true}
            style={{ minWidth: 300 }}
          />
          <Input
            onChangeText={(text) => setContentOfMemory(text)}
            keyboardType="default"
            defaultValue={contentOfMemory}
            maxLength={100}
            placeholder="Conteúdo da lembrança?"
            clearTextOnFocus={true}
            style={{ minWidth: 300 }}
          />
        </View>
        <Button onPress={storeItem}>
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
