/*
  [] Implementar notificação;
    [] ;
  [] Implementar o armazenamento assíncrono; 
    [] ;

*/

import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

import { Header, Item, Button, Modal, Input, ItemModal } from '../../components/index';

import styles from './styles';

import moment from 'moment';

export default function Home() {
  /* TESTING NOTIFICATIONS
   */
  // Configuring the notification
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  /* MODAL STATES */
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [visibleItemModal, setVisibleItemModal] = useState(false);
  const [visibleNoItemsModal, setVisibleNoItemsModal] = useState(false);
  const [visibleNullModalMemoryDeletedItem, setVisibleNullModalMemoryDeletedItem] = useState(false);

  /* ITEMS STATES */
  const [items, setItems] = useState([]);
  const [notification, setNotification] = useState([]);

  /* INPUTS STATES */
  const [id, setId] = useState(1);
  const [findedItem, setfindedItem] = useState({});
  const [timeToRemember, setTimeToRemember] = useState('');
  const [titleOfMemory, setTitleOfMemory] = useState('');
  const [contentOfMemory, setContentOfMemory] = useState('');

  /* ITEM METHODS */

  // Method responsable for store Items in the items state
  function storeItem() {
    // The field timeToRemember is obliged
    if (timeToRemember === '') {
      alert('Miss some field, please try again...');
      setVisibleCreateModal(!visibleCreateModal);
    } else {
      handlerCreateMemoryModal();
      setId(id + 1);

      const notificationIdentifier = creatingNotification({
        titleOfNotification: titleOfMemory,
        bodyOfNotification: contentOfMemory,
        triggerSeconds: Math.round(timeToRemember * 60),
        itemId: id,
      });

      /* Setting the Items with the new Item
      and getting the which were already there */
      setItems([
        ...items,
        {
          id: id,
          timeToRemember: Math.round(timeToRemember * 60),
          titleOfMemory: titleOfMemory,
          contentOfMemory: contentOfMemory,
          createdAtDate: `Created in ${moment().format('L')}`,
          createdAtHours: `${moment().format('LT')}`,
          timeStamp: moment().format(),
          notificationIdentifier: notificationIdentifier,
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

  async function removeOneItem(index) {
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

  function editOneItem(itemId, { newContentOfMemory, newTitleOfMemory }) {
    getOneItem(itemId);
    findedItem.contentOfMemory = newContentOfMemory;
    findedItem.titleOfMemory = newTitleOfMemory;
    findedItem.createdAtDate = `Edited at ${moment().format('L')}`;
    findedItem.createdAtHours = `${moment().format('LT')}`;

    const notificationIdentifier = creatingNotification({
      titleOfNotification: titleOfMemory,
      bodyOfNotification: contentOfMemory,
      triggerSeconds: findedItem.timeToRemember,
      itemId: itemId,
    });
  }

  /* TESTS METHODS */

  function alertTest1() {
    Alert.alert('Alerta de teste 1', 'teste');
  }

  function alertTest2() {
    Alert.alert('Alerta de teste 2', 'teste');
  }

  /* HANDLERS METHODS */

  function handlerOpenItemModal() {
    setVisibleItemModal(!visibleItemModal);
  }

  function handlerCreateMemoryModal() {
    setVisibleCreateModal(!visibleCreateModal);
  }

  /* NOTIFICATIONS METHODS */

  function showAllNotifications() {
    return Notifications.getAllScheduledNotificationsAsync()
      .then((res) => res)
      .catch((err) => err);
  }

  async function creatingNotification({
    titleOfNotification,
    bodyOfNotification,
    triggerSeconds,
    itemId,
  }) {
    // Scheduling the notification
    const identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: titleOfNotification,
        body: bodyOfNotification,
        data: { id: itemId },
      },
      trigger: {
        seconds: triggerSeconds,
      },
    });

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#195C92',
      });
    }
  }

  return (
    <View style={styles.wrapped}>
      <Header />
      <ScrollView>
        {/*Container of items */}
        <View style={styles.container}>
          {/* Checking if the items list is empty with ternary operator */}
          {indexItems().length < 1 ? (
            <View style={styles.emptyMemoriesList}>
              {/* Message in case which the list is empty */}
              <Text style={{ color: '#195C92', fontSize: 20 }}>😴 No have memories at here...</Text>
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
                  createdAtDate={`${item.createdAtDate}`}
                  createdAtHours={`${item.createdAtHours}`}
                  confirmButton={alertTest1}
                  deleteButton={async () => {
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
                  style={styles.modalContainer}
                  visibleItemModal={visibleItemModal}
                  handlerOpenItemModal={handlerOpenItemModal}
                  id={findedItem.id}
                  key={index}
                  titleOfMemory={findedItem.titleOfMemory}
                  createdAtHours={findedItem.createdAtHours}
                  createdAtDate={findedItem.createdAtDate}
                  contentOfMemory={findedItem.contentOfMemory}
                  setContentOfMemory={setContentOfMemory}
                  setTitleOfMemory={setTitleOfMemory}
                  confirmChangesButton={() => {
                    editOneItem(findedItem.id, {
                      newContentOfMemory: contentOfMemory,
                      newTitleOfMemory: titleOfMemory,
                    });
                    handlerOpenItemModal();
                  }}
                  deleteButton={() => {
                    removeOneItem(findedItem.id);
                    handlerOpenItemModal();
                    setVisibleNullModalMemoryDeletedItem(!visibleNullModalMemoryDeletedItem);
                  }}
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
        swipeDirection={'down'}
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
          <Text style={styles.modalHeaderTitle}>Create Memory</Text>
        </View>

        {/* Modal content/where stay the inputs
         and the button which confirm the creation of the Item */}
        <View style={styles.modalContent}>
          {/* Inputs which set the value of timeToRemember */}
          <View style={styles.inputGroup}>
            <Input
              onChangeText={(value) => setTimeToRemember(value)}
              defaultValue={timeToRemember}
              keyboardType="numeric"
              placeholder="How many minutes should you be reminded of? (in minutes)"
              clearTextOnFocus={true}
              style={{ minWidth: 300 }}
            />
          </View>
          {/* Inputs which set the value of titleMemory */}
          <View style={styles.inputGroup}>
            <Input
              onChangeText={(text) => setTitleOfMemory(text)}
              keyboardType="default"
              defaultValue={titleOfMemory}
              maxLength={25}
              placeholder="Title of what you must be remembered?"
              clearTextOnFocus={true}
              style={{ minWidth: 300 }}
            />
          </View>

          {/* Inputs which set the value of contentOfMemory */}
          <View style={styles.inputGroup}>
            <Input
              onChangeText={(text) => setContentOfMemory(text)}
              keyboardType="default"
              defaultValue={contentOfMemory}
              maxLength={100}
              placeholder="Content of memory?"
              clearTextOnFocus={true}
              style={{ minWidth: 300 }}
            />
          </View>
        </View>
        {/* Submit Button who calls the function
         to storage the inputs texts in Item */}
        <Button onPress={storeItem} style={styles.createItemButton}>
          <Text>Create memory</Text>
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
