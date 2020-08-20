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

      <Text style={{ color: '#FFF' }}>Memory Title</Text>
      <Input
        onChangeText={(text) => setTitleOfMemory(text)}
        keyboardType="default"
        defaultValue={titleOfMemory}
        maxLength={100}
        placeholder="Memory title?"
        clearTextOnFocus={true}
      />
      <Text style={{ color: '#fff' }}>Creation date</Text>
      <Input
        onChangeText={(text) => setContentOfMemory(text)}
        keyboardType="default"
        defaultValue={createdAtDate}
        maxLength={100}
        clearTextOnFocus={true}
      />
      <Text style={{ color: '#fff' }}>Creation hour</Text>
      <Input
        onChangeText={(text) => setContentOfMemory(text)}
        keyboardType="default"
        defaultValue={createdAtHours}
        maxLength={100}
        clearTextOnFocus={true}
      />
      <Text style={{ color: '#fff' }}>Memory content</Text>
      <Input
        onChangeText={(text) => setContentOfMemory(text)}
        keyboardType="default"
        defaultValue={contentOfMemory}
        maxLength={100}
        placeholder="Content of memory?"
        clearTextOnFocus={true}
      />
      <Button
        style={{ padding: '3%', borderColor: 'yellow', color: 'yellow' }}
        onPress={confirmChangesButton}
      >
        Edit this memory
      </Button>
      <Button style={{ padding: '3%', borderColor: 'red', color: 'red' }} onPress={deleteButton}>
        Delete this memory
      </Button>
    </Modal>
  );
}
