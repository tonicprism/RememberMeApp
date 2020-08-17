import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';

import { Header, Item, Button, Modal, Input, ItemModal } from '../../components/index';

import ItemServices from '../../service/itemServices';

import styles from './styles';

import moment from 'moment';

export default function Home() {
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [visibleItemModal, setVisibleItemModal] = useState(false);
  const [visibleNoItemsModal, setVisibleNoItemsModal] = useState(false);
  const [visibleNullModalMemoryDeletedItem, setVisibleNullModalMemoryDeletedItem] = useState(false);
  /* ITEMS STATES */
  const [items, setItems] = useState([]);
  const itemServices = new ItemServices(items);

  /* INPUTS STATES */
  const [id, setId] = useState(1);
  const [findedItem, setfindedItem] = useState({});
  const [timeToRemember, setTimeToRemember] = useState('');
  const [titleOfMemory, setTitleOfMemory] = useState('');
  const [contentOfMemory, setContentOfMemory] = useState('');

  // Method responsable for store Items in the items state
  function storeItem() {
    // The field timeToRemember is obliged
    if (timeToRemember === '') {
      alert('Miss some field, please try again...');
      setVisibleCreateModal(!visibleCreateModal);
    } else {
      handlerCreateMemoryModal();
      setId(id + 1);

      /* Setting the Items with the new Item
      and getting the which were already there */
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

  function removeOneItem(index) {
    let newItems = items;
    let findingOneItemInTheNewItemsArray = newItems.find((item) => item.id == index);
    let indexOfItemGonnaBeRemover = newItems.indexOf(findingOneItemInTheNewItemsArray);
    newItems.splice(indexOfItemGonnaBeRemover, 1);
    setItems(newItems);
  }

  function getOneItem(index) {
    let newItems = items;
    let findingOneItemInTheNewItemsArray = newItems.find((item) => item.id == index);
    setfindedItem(findingOneItemInTheNewItemsArray);
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

  return (
    <View style={styles.wrapped}>
      <Header />
      <ScrollView>
        {/**
         * {console.log(`Inspencionando o estado Id => ${id}`)}
        {items.map((item) => console.log(item))}
         */}
        {/*Container de items */}
        <View style={styles.container}>
          {/* Checking if the items list is empty with ternay operator */}
          {indexItems().length < 1 ? (
            <View
              style={{
                marginVertical: '50%',
                minHeight: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Message in case which the list is empty */}
              <Text style={{ color: '#195C92', fontSize: 20 }}>No have memories at here...</Text>
            </View>
          ) : (
            // Rendering the Items and travelling the list
            indexItems().map((item, index) => (
              <>
                <Item
                  key={item.id} // Unique key obligated by React
                  itemId={item.id}
                  timeToRemember={Math.round(item.timeToRemember / 60)} // O timeToRemember is caught in seconds and converted to minutes
                  titleOfMemory={item.titleOfMemory}
                  contentOfMemory={item.contentOfMemory}
                  createdAtDate={item.createdAtDate}
                  createdAtHours={item.createdAtHours}
                  confirmButton={alertTest1}
                  deleteButton={() => {
                    removeOneItem(item.id);
                    setVisibleNullModalMemoryDeletedItem(!visibleNullModalMemoryDeletedItem);
                  }}
                  handlerModal={() => {
                    getOneItem(item.id);
                    handlerOpenItemModal();
                  }}
                  visibleModal={visibleItemModal}
                />
                {/* Item Modal which enable the view of the contentOfMemory */}
                <ItemModal
                  visibleItemModal={visibleItemModal}
                  handlerOpenItemModal={handlerOpenItemModal}
                  id={findedItem.id}
                  key={id}
                  titleOfMemory={findedItem.titleOfMemory}
                  createdAtHours={findedItem.createdAtHours}
                  createdAtDate={findedItem.createdAtDate}
                  contentOfMemory={findedItem.contentOfMemory}
                  setContentOfMemory={setContentOfMemory}
                  setTitleOfMemory={setTitleOfMemory}
                />
              </>
            ))
          )}
        </View>
      </ScrollView>

      {/* Creation of item modal */}
      <Modal
        isVisible={visibleCreateModal}
        style={styles.modalContainer}
        onPress={handlerCreateMemoryModal}
      >
        {/* Modal title */}
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

        {/* Modal content/where stay the inputs
         and the button which confirm the creation of the Item */}
        <View style={styles.modalContent}>
          {/* Inputs which set the value of timeToRemember */}
          <Input
            onChangeText={(value) => setTimeToRemember(value)}
            defaultValue={timeToRemember}
            keyboardType="numeric"
            placeholder="Em quantos minutos você deve ser lembrado? (Em minutos)"
            clearTextOnFocus={true}
            style={{ minWidth: 300 }}
          />
          {/* Inputs which set the value of titleMemory */}
          <Input
            onChangeText={(text) => setTitleOfMemory(text)}
            keyboardType="default"
            defaultValue={titleOfMemory}
            maxLength={50}
            placeholder="Título do que você deve ser lembrado?"
            clearTextOnFocus={true}
            style={{ minWidth: 300 }}
          />

          {/* Inputs which set the value of contentOfMemory */}
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
        {/* Submit Button who calls the function
         to storage the inputs texts in Item */}
        <Button onPress={storeItem}>
          <Text>Create Item</Text>
        </Button>
      </Modal>
      {/* FloatButton */}
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
