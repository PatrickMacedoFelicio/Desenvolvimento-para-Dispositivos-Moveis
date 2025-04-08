import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
                const json = await res.json();

                const promises = json.results.map((pokemon) =>
                    fetch(pokemon.url).then((res) => res.json())
                );

                const detalhes = await Promise.all(promises);
                setPokemons(detalhes);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar pokémons:', error);
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffcb05" />
            </View>
        );
    }

    return (
        <FlatList
            data={pokemons}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image
                        source={{ uri: item.sprites.front_default }}
                        style={styles.image}
                    />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.details}>Altura: {item.height}</Text>
                    <Text style={styles.details}>Peso: {item.weight}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 8,
        paddingTop: 16,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#f1f1f1',
        borderRadius: 12,
        padding: 12,
        margin: 8,
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
        textTransform: 'capitalize',
    },
    details: {
        fontSize: 14,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Pokemon;
