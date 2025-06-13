import React from 'react';
import { StyleSheet, View } from 'react-native';
import Formulario from './views/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Formulario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
    justifyContent: 'center',
  },
});
