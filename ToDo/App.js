import { StyleSheet, Text, View } from 'react-native';
import ToDo from './Components/ToDo'

export default function App() {
  return (
    <View style={styles.container}>
      <ToDo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
