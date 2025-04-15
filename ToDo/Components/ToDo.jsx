import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setListaTarefas([...listaTarefas, tarefa]);
      setTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novaLista = listaTarefas.filter((_, i) => i !== index);
    setListaTarefas(novaLista);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />

        <TouchableOpacity style={styles.botaoAdd} onPress={adicionarTarefa}>
          <Text style={styles.botaoAddTexto}>+</Text>
        </TouchableOpacity>
        
      </View>

      <Text style={styles.subtitulo}>Minhas Tarefas</Text>

      <FlatList
        data={listaTarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (

          <View style={styles.tarefaItem}>

            <Text style={styles.tarefaTexto}>{item}</Text>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerTarefa(index)}>
              <Text style={styles.botaoRemoverTexto}>X</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 50,
      backgroundColor: '#fff',
    },
    titulo: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    subtitulo: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 10,
    },
    inputArea: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      width: 300,
      backgroundColor: '#f5f5f5',
      padding: 10,
      borderRadius: 10,
      fontSize: 16,
    },
    botaoAdd: {
      marginLeft: 10,
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 50,
    },
    botaoAddTexto: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    tarefaItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    },
    tarefaTexto: {
      flex: 1,
      fontSize: 16,
    },
    botaoRemover: {
      marginLeft: 10,
      backgroundColor: '#ff4d4d',
      padding: 8,
      borderRadius: 50,
    },
    botaoRemoverTexto: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 14,
    },
  });
  