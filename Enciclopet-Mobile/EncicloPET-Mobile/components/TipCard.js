import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function TipCard({ title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)} style={{
      backgroundColor: '#ffe4c4',
      margin: 10,
      padding: 15,
      borderRadius: 12,
      elevation: 3
    }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      {expanded && <Text style={{ marginTop: 8 }}>{description}</Text>}
    </TouchableOpacity>
  );
}
