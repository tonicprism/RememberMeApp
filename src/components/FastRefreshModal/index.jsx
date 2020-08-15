import React from 'react';
import { Text } from 'react-native';

import Modal from '../Modal';

export default function FastRefreshModal({ handlerFastRefresh }) {
  return (
    <Modal isVisible={handlerFastRefresh} style={{ opacity: 0 }}>
      <Text>Item criado ou deletado com sucesso!</Text>
    </Modal>
  );
}
