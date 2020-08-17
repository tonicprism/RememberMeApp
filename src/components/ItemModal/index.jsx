import React from 'react';
import { Text, View } from 'react-native';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import styles from '../../pages/Home/styles';

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
  style,
}) {
  return (
    <Modal isVisible={visibleItemModal} onPress={handlerOpenItemModal} style={style}>
      {/*console.log(`Item encontrado: ${JSON.stringify(findedItem)}`)*/}
      <View style={styles.modalHeader}>
        <Button
          iconFamily="MaterialCommunityIcons"
          iconColor="#ffffff"
          iconSize={30}
          iconName="pencil"
        />
        <Text style={styles.modalHeaderTitle}>Editar Memória</Text>
      </View>

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
      <Input
        onChangeText={(text) => setContentOfMemory(text)}
        keyboardType="default"
        defaultValue={createdAtDate}
        maxLength={100}
        clearTextOnFocus={true}
      />
      <Text style={{ color: '#fff' }}>Hora de criação</Text>
      <Input
        onChangeText={(text) => setContentOfMemory(text)}
        keyboardType="default"
        defaultValue={createdAtHours}
        maxLength={100}
        clearTextOnFocus={true}
      />
      <Text style={{ color: '#fff' }}>Conteúdo da memoria</Text>
      <Input
        onChangeText={(text) => setContentOfMemory(text)}
        keyboardType="default"
        defaultValue={contentOfMemory}
        maxLength={100}
        placeholder="Conteúdo da lembrança?"
        clearTextOnFocus={true}
      />
      <Button
        style={{ padding: '3%', borderColor: 'yellow', color: 'yellow' }}
        onPress={confirmChangesButton}
      >
        Editar Memória
      </Button>
      <Button style={{ padding: '3%', borderColor: 'red', color: 'red' }} onPress={deleteButton}>
        Delete essa memoria
      </Button>
    </Modal>
  );
}
