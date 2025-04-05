import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';

const dicasIniciais = [
  {
    id: '1',
    texto: '1 - Beba bastante água todos os dias.',
    descricao: 'Beber água regularmente ajuda na digestão, regula a temperatura corporal e mantém a pele saudável.',
  },
  {
    id: '2',
    texto: '2 - Durma pelo menos 7 a 8 horas por noite.',
    descricao: 'Dormir bem fortalece o sistema imunológico, melhora a memória e regula o humor.',
  },
  {
    id: '3',
    texto: '3 - Pratique exercícios físicos regularmente.',
    descricao: 'Exercícios ajudam a reduzir o estresse, melhorar o humor e manter o coração saudável.',
  },
  {
    id: '4',
    texto: '4 - Evite o uso excessivo de eletrônicos antes de dormir.',
    descricao: 'A luz azul emitida pelas telas pode afetar a produção de melatonina e prejudicar o sono.',
  },
  {
    id: '5',
    texto: '5 - Medite por alguns minutos diariamente.',
    descricao: 'A meditação reduz a ansiedade, melhora o foco e promove o autoconhecimento.',
  },
  {
    id: '6',
    texto: '6 - Mantenha uma alimentação balanceada.',
    descricao: 'Comer bem fornece energia, fortalece o sistema imunológico e previne doenças.',
  },
];

export default function App() {
  const [dicas, setDicas] = useState([]);
  const [buscaTemp, setBuscaTemp] = useState('');
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [dicaSelecionada, setDicaSelecionada] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setDicas(dicasIniciais);
      setCarregando(false);
    }, 1500);
  }, []);

  const mostrarDetalhes = (dica) => {
    setDicaSelecionada(dica);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#e0f7fa',
        borderRadius: 8,
      }}
      onPress={() => mostrarDetalhes(item)}
    >
      <Text>{item.texto}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: '#Ffffff' }}>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#1E90FF' }}>
          Dicas de Bem-estar
        </Text>

        <Image
          source={{ uri: 'https://www.carpemundi.com.br/wp-content/uploads/2022/09/turismo-de-bem-estar.jpg' }}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'cover',
            marginBottom: 20,
            borderRadius: 20,
          }}
        />

        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'justify' }}>
          Cuidar de si mesmo deve ser sempre uma prioridade. Não! Isso não é egoísmo. É questão de sobrevivência. Se você está bem, conseguirá cuidar das outras pessoas e do seu trabalho da melhor forma. E lembre-se: não é possível ser a melhor pessoa em tudo que se faz, por isso, não se frustre e não se cobre.
        </Text>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10, color: '#1E90FF' }}>
          Cards com dicas!
        </Text>

        <TextInput
          placeholder="Pesquise um card específico..."
          value={buscaTemp}
          onChangeText={setBuscaTemp}
          style={{
            borderWidth: 1,
            borderColor: '#aaa',
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
            backgroundColor: '#Ffffff'
          }}
        />

        <Button
          style={{ borderRadius: 20 }}
          title="Buscar"
          onPress={() => {
            setBusca(buscaTemp);
            const filtradas = dicasIniciais.filter((item) =>
              item.texto.toLowerCase().includes(buscaTemp.toLowerCase())
            );
            setDicas(filtradas);
          }}
        />

        {carregando ? (
          <ActivityIndicator size="large" color="#00acc1" style={{ marginTop: 20 }} />
        ) : (
          <FlatList
            data={dicas}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={{ marginTop: 20 }}
          />
        )}

        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'justify', marginTop: 10}}>
        Aproveite o dia de hoje para colocar sua saúde em dia! Marque o seu check-up para prevenir doenças e prolongar o seu bem-estar.
        </Text>
        
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 10,
                width: '85%',
                maxHeight: '80%',
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
                {dicaSelecionada?.texto}
              </Text>
              <ScrollView>
                <Text style={{ fontSize: 16, textAlign: 'justify', marginBottom: 10 }}>
                  {dicaSelecionada?.descricao}
                </Text>
              </ScrollView>
              <Button title="Fechar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}