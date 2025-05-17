import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Componente de botão estilizado
 * @param {{ title: string, onPress: ()=> void}} props
 */
const StyledButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={estilos.botao} onPress={onPress}>
            <Text style={estilos.botaoTexto}>{title}</Text>
        </TouchableOpacity>
    );
};

export default StyledButton;

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#0066cc',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    botaoTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    }
});
