import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DraculaCard = ({ title, content }) => {
    return (
        <View style={estilo.card}>
            <Text style={estilo.title}>{title}</Text>
            <Text style={estilo.content}>{content}</Text>
        </View>
    );
};


export default DraculaCard;

const estilo = StyleSheet.create({
    card: {
        backgroundColor: '#44475a',
        borderRadius: 8,
        padding: 16,
        elevation: 3
    },
    title: {
        color: '#ff79c6',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8
    },
    content: {
        color: '#f8f8f2',
        fontSize: 14,
        lineHeight: 20
    }
});
