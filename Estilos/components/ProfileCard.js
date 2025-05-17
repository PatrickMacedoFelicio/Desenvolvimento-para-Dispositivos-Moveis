import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

/**
 * Componente de cartão de perfil
 * @param {{ nome: string, avatarUri: string, bio?: string }} props
 */
const ProfileCard = ({ nome, avatarUri, bio }) => {
    return (
        <View style={estilo.card}>
            <Image source={{ uri: avatarUri }} style={estilo.avatar} />

            <View style={estilo.info}>
                <Text style={estilo.nome}>{nome}</Text>
                {bio && <Text style={estilo.bio}>{bio}</Text>}
            </View>
        </View>
    );
};

export default ProfileCard;

const estilo = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        alignItems: 'center'
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32
    },
    info: {
        marginLeft: 12,
        flex: 1
    },
    nome: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 4
    },
    bio: {
        fontSize: 14,
        color: '#666666'
    }
});
