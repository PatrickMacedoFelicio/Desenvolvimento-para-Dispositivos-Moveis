import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from './components/StyledButton';

export default function App() {

  const handlePress = () => { alert("Você clicou no botão") };

  return (
    <View style={styles.container}>


      <StyledButton
        title='Clique aqui'
        onPress={handlePress}
      />


      <StatusBar style="auto" />
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
