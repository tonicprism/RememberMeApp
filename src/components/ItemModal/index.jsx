import React from 'react';
import { Text } from 'react-native';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

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
  confirmChangesButton,
  deleteButton,
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
      <Text style={{ color: '#fff' }}>
        {' '}
        Id do item da modal: <Text style={{ color: '#000' }}>{id}</Text>
      </Text>
      <Text style={{ color: '#FFF' }}>Titulo da memoria</Text>
      <Input
        onChangeText={(text) => setTitleOfMemory(text)}
        keyboardType="default"
        defaultValue={titleOfMemory}
        maxLength={100}
        placeholder="Titulo da lembrança"
        clearTextOnFocus={true}
      />
      <Text style={{ color: '#fff' }}>Data de criação</Text>
      <Text>{createdAtDate}</Text>
      <Text style={{ color: '#fff' }}>Hora de criação</Text>
      <Text>{createdAtHours}</Text>
      <Text style={{ color: '#fff' }}>Conteúdo da memoria</Text>
      <Input
        onChangeText={(text) => setContentOfMemory(text)}
        keyboardType="default"
        defaultValue={contentOfMemory}
        maxLength={100}
        placeholder="Conteúdo da lembrança?"
        clearTextOnFocus={true}
      />
      <Button style={{ padding: '3%' }} onPress={confirmChangesButton}>
        Editar Memória
      </Button>
      <Button style={{ padding: '3%', borderColor: 'red' }} onPress={deleteButton}>
        Delete essa memoria
      </Button>
    </Modal>
  );
}
