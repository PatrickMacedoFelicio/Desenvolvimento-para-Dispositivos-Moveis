import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroCep, setErroCep] = useState('');
  const [erroCpf, setErroCpf] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const validarNome = () => {
    if (nome.trim().length <= 5)
      setErroNome('Nome tem que ter mais de 5 caracteres');
  };

  const validarCep = () => {
    const regex = /^\d{5}-\d{3}$/;
    setErroCep(regex.test(cep) ? '' : 'CEP deve estar no formato 00000-000');
  };

  const validarCpf = () => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    setErroCpf(regex.test(cpf) ? '' : 'CPF deve estar no formato 000.000.000-00');
  };

  const validarTelefone = () => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    setErroTelefone(regex.test(telefone) ? '' : 'Telefone deve estar no formato (00) 00000-0000');
  };

  const validarEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErroEmail(regex.test(email) ? '' : 'Email inválido');
  };

  const validarSenha = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[\w\S]{8,}$/;
    const acento = /[çáàâãéèêíïóôõöúüñ]/i;
    if (!regex.test(senha) || acento.test(senha)) {
      setErroSenha('Senha com 8 dígitos, maiúscula, minúscula, número e caractere especial. Sem acento e "ç"');
    } else {
      setErroSenha('');
    }
  };

  const Enviar = () => {
    validarNome();
    validarCep();
    validarCpf();
    validarTelefone();
    validarEmail();
    validarSenha();

    if (
      !erroNome && !erroCep && !erroCpf &&
      !erroTelefone && !erroEmail && !erroSenha &&
      nome && cep && cpf && telefone && email && senha
    ) {
      Alert.alert('Sucesso!', 'Todos os dados estão válidos.');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos corretamente.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <Campo label="Nome completo" value={nome} setValue={setNome} onBlur={validarNome} erro={erroNome} />
      <Campo label="Digite seu CEP" value={cep} setValue={setCep} onBlur={validarCep} erro={erroCep} />
      <Campo label="Digite seu CPF" value={cpf} setValue={setCpf} onBlur={validarCpf} erro={erroCpf} />
      <Campo label="Digite seu telefone" value={telefone} setValue={setTelefone} onBlur={validarTelefone} erro={erroTelefone} />
      <Campo label="Email" value={email} setValue={setEmail} onBlur={validarEmail} erro={erroEmail} />
      <Campo label="Senha segura" value={senha} setValue={setSenha} onBlur={validarSenha} erro={erroSenha}/>

      <TouchableOpacity style={styles.botao} onPress={Enviar}>
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Campo({ label, value, setValue, onBlur, erro}) {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onBlur={onBlur}
        placeholder={label}
        placeholderTextColor="#999"
      />
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#C68EFD',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  error: {
    color: '#C68EFD',
    fontSize: 12,
    marginTop: 5,
  },
  botao: {
    backgroundColor: '#C68EFD',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
