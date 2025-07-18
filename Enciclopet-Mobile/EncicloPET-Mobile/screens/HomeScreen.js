import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EncicloPET Mobile 🐾</Text>
      <Text style={styles.subtitle}>
        Um guia completo para o bem-estar do seu pet!
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Guia de Cuidados')}>
        <Text style={styles.buttonText}>Acessar Guia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pet Shops Próximos')}>
        <Text style={styles.buttonText}>Ver Mapa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffaf0', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 30 },
  button: { backgroundColor: '#ffa07a', padding: 15, borderRadius: 10, marginTop: 10, width: '80%' },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
});
