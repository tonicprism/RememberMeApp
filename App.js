import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import NotificationTest from './src/components/InTest/Notification';

import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <Home />
      {/*<NotificationTest />*/}
      <StatusBar style="auto" />
    </>
  );
}
