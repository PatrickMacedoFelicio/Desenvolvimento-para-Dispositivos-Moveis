import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import GuideScreen from './screens/GuideScreen';
import MapScreen from './screens/MapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ffdab9' } }}>
        <Stack.Screen name="EncicloPET" component={HomeScreen} />
        <Stack.Screen name="Guia de Cuidados" component={GuideScreen} />
        <Stack.Screen name="Pet Shops Próximos" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


