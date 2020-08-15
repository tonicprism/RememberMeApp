import React from 'react';
import { Text } from 'react-native';

import Modal from '../Modal';
import Input from '../Input';

export default function ItemModal({
  visibleItemModal,
  handlerOpenItemModal,
  id,
  titleOfMemory,
  createdAtHours,
  createdAtDate,
  contentOfMemory,
  setTitleOfMemory,
  setContentOfMemory,
}) {
  return (
    <Modal
      isVisible={visibleItemModal}
      onPress={handlerOpenItemModal}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 20,
        paddingLeft: 10,
        marginTop: 2,
      }}
    >
      {/*console.log(`Item encontrado: ${JSON.stringify(findedItem)}`)*/}
      <Text>{id}</Text>
      <Text>Titulo da memoria</Text>
      <Input
        onChangeText={(text) => setTitleOfMemory(text)}
        keyboardType="default"
        defaultValue={titleOfMemory}
        maxLength={100}
        placeholder="Conteúdo da lembrança?"
        clearTextOnFocus={true}
      />
      <Text>Data de criação</Text>
      <Text>{createdAtDate}</Text>
      <Text>{createdAtHours}</Text>
      <Text>Conteúdo da memoria</Text>
      <Input
        onChangeText={(text) => setContentOfMemory(text)}
        keyboardType="default"
        defaultValue={contentOfMemory}
        maxLength={100}
        placeholder="Conteúdo da lembrança?"
        clearTextOnFocus={true}
      />
    </Modal>
  );
}
