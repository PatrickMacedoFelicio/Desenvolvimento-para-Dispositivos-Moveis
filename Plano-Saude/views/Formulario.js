import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Formulario() {
  const [idade, setIdade] = useState('');
  const [plano, setPlano] = useState('');
  const [mesesAtivo, setMesesAtivo] = useState('');
  const [carencia, setCarencia] = useState(false);
  const [doencasCronicas, setDoencasCronicas] = useState(false);
  const [dependentes, setDependentes] = useState('');
  const [consultasLiberadas, setConsultasLiberadas] = useState(false);
  const [faturaAtrasada, setFaturaAtrasada] = useState(false);
  const [estado, setEstado] = useState('');

  const estadosAtendidos = ['São Paulo', 'Minas Gerais', 'Paraná'];

  function verificarBeneficio() {
    const idadeNum = parseInt(idade);
    const mesesNum = parseInt(mesesAtivo);
    const dependentesNum = parseInt(dependentes);

    if (isNaN(idadeNum) || idadeNum < 18 || idadeNum > 65) {
      Alert.alert('Desculpe', 'Você não pode receber o benefício por causa da idade.');
      return;
    }
    if (!(plano === 'premium' || (plano === 'essencial' && mesesNum >= 12))) {
      Alert.alert('Desculpe', 'Você não tem o plano ou tempo ativo necessários.');
      return;
    }
    if (!carencia) {
      Alert.alert('Desculpe', 'Você não concluiu o período de carência.');
      return;
    }
    if (doencasCronicas) {
      Alert.alert('Desculpe', 'Você possui doenças crônicas cadastradas.');
      return;
    }
    if (isNaN(dependentesNum) || dependentesNum > 3) {
      Alert.alert('Desculpe', 'Você tem mais de 3 dependentes.');
      return;
    }
    if (!consultasLiberadas) {
      Alert.alert('Desculpe', 'Você não teve consultas liberadas nos últimos 6 meses.');
      return;
    }
    if (faturaAtrasada) {
      Alert.alert('Desculpe', 'Você possui fatura(s) em atraso.');
      return;
    }
    if (!estadosAtendidos.includes(estado)) {
      Alert.alert('Desculpe', `Seu estado (${estado}) não está na lista dos estados atendidos.`);
      return;
    }

    Alert.alert('Parabéns!', 'Você está qualificado para o benefício extra do seu Plano de Saúde!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite sua idade"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Tipo de plano:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={plano}
          onValueChange={setPlano}
          style={styles.picker}
          dropdownIconColor="#333"
        >
          <Picker.Item label="Selecione um plano..." value="" color="#999" />
          <Picker.Item label="Básico" value="basico" />
          <Picker.Item label="Essencial" value="essencial" />
          <Picker.Item label="Premium" value="premium" />
        </Picker>
      </View>

      <Text style={styles.label}>Meses ativo:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={mesesAtivo}
        onChangeText={setMesesAtivo}
        placeholder="Há quantos meses está ativo"
        placeholderTextColor="#999"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Carência concluída?</Text>
        <Switch value={carencia} onValueChange={setCarencia} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Doenças crônicas cadastradas?</Text>
        <Switch value={doencasCronicas} onValueChange={setDoencasCronicas} />
      </View>

      <Text style={styles.label}>Número de dependentes:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={dependentes}
        onChangeText={setDependentes}
        placeholder="Quantos dependentes?"
        placeholderTextColor="#999"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Consultas liberadas nos últimos 6 meses?</Text>
        <Switch value={consultasLiberadas} onValueChange={setConsultasLiberadas} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Fatura em atraso?</Text>
        <Switch value={faturaAtrasada} onValueChange={setFaturaAtrasada} />
      </View>

      <Text style={styles.label}>Estado onde mora:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={estado}
          onValueChange={setEstado}
          style={styles.picker}
          dropdownIconColor="#333"
        >
          <Picker.Item label="Selecione um estado..." value="" color="#999" />
          <Picker.Item label="São Paulo" value="São Paulo" />
          <Picker.Item label="Minas Gerais" value="Minas Gerais" />
          <Picker.Item label="Paraná" value="Paraná" />
        </Picker>
      </View>

      <Button title="Verificar Benefício" onPress={verificarBeneficio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111', 
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#fff',
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
    color: '#000000',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  picker: {
    height: 50,
    color: '#000000',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});
