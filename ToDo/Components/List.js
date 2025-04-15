import React, { useEffect } from "react";
import { ScrollView, View, Text, FlatList } from "react-native-web";


const TabelaExemplo = () => {
    const [dados, setDados] = useEffect([
        { id: '1', nome: 'Patrick', valor: '100' },
        { id: '2', nome: 'Samuel', valor: '200' },
        { id: '3', nome: 'Lucas', valor: '300' }
    ]);

    const renderItem = ({ item }) => (
        <view>
            <text>{item.id}</text>
            <text>{item.nome}</text>
            <text>{item.valor}</text>
        </view>
    );

    return (
        <view>
            <view>
                <text>ID</text>
                <text>NOME</text>
                <text>VALOR</text>
            </view>

            <FlatList
                data={dados}
                renderItem={renderItem}>
            </FlatList>

        </view>
    )
}

export default TabelaExemplo();