import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import styles from './styles';

/***
 * @params
 *
 */
export default function Item({
  itemId,
  timeToRemember,
  titleOfMemory,
  contentOfMemory,
  createdAtDate,
  createdAtHours,
  handlerModal,
  visibleModal,
  confirmButton,
  deleteButton,
}) {
  return (
    <View style={styles.wrapper}>
      {/* BEGIN ITEM CONTENT */}
      <TouchableOpacity onPress={handlerModal}>
        {/* BEGIN ITEM HEADER */}
        <ItemHeader
          title={`Em ${timeToRemember} minutos`}
          iconName="md-time"
          color="#195C92"
          fontSize={30}
        />
        {/* END ITEM HEADER */}

        {/* BEGIN ITEM BODY */}
        <ItemBody style={styles.itemBodyContainer}>
          <Text>{itemId}</Text>
          <View style={styles.titleTextContainer}>
            <Button
              iconFamily="MaterialCommunityIcons"
              iconName="format-text"
              iconSize={30}
              iconColor="#ffffff"
            />
            <Text style={styles.descriptionTextTitle}>{titleOfMemory}</Text>
          </View>
          <View style={styles.dateTextContainer}>
            <Button
              iconFamily="MaterialCommunityIcons"
              iconName="update"
              iconSize={20}
              iconColor="#ffffff"
              style={{ marginLeft: 5 }}
            />
            {/* [] O QUE FAZER --> Criado em {date(dd/mm/aa)} às {time(hh/mm)} */}
            <Text style={styles.dateText}>{`${createdAtDate} ${createdAtHours}`}</Text>
          </View>
        </ItemBody>
        {/* END ITEM BODY */}
      </TouchableOpacity>
      {/* END ITEM CONTENT */}

      {/* BEGIN BUTTONS CONTAINER */}
      <View style={[styles.buttonsContainerItem]}>
        <Button
          iconFamily="AntDesign"
          iconName="checkcircleo"
          iconSize={20}
          iconColor="green"
          style={{ marginBottom: 9 }}
          onPress={confirmButton}
        />
        <Button
          iconFamily="EvilIcons"
          iconName="trash"
          iconSize={35}
          iconColor="red"
          style={{ marginBottom: 13 }}
          onPress={deleteButton}
        />
      </View>
      {/* END BUTTONS CONTAINER */}
    </View>
  );
}
