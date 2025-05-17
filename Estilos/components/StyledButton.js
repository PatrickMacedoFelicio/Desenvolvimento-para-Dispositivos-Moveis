import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

/**
 * Componente de botão estilizado
 * @param {{ title: string, onPress: ()=> void}} props
 * 
 */
const StyledButton = ({ title, onPress }) => {

    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

export default StyledButton;