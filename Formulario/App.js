import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './View/Formulario.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Formulario/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
    padding: 20,
  },
});
