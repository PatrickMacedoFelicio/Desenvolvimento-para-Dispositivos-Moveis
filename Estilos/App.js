import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from './components/StyledButton';
import ProfileCard from './components/ProfileCard';
import DraculaCard from './components/DraculaCard';

export default function App() {

  const handlePress = () => { alert("Você clicou no botão") };

  return (
    <View style={styles.container}>

      <DraculaCard
        title={"Titulo teste"}
        content={"Conteudo nada importante"}
      />

      {/* <ProfileCard
        nome='Jack Twist'
        avatarUri='https://carboncostume.com/wordpress/wp-content/uploads/2020/04/jack-twist-from-brokeback-mountain.jpg'
        bio='Real Cowboy ride C'
      />

      <StyledButton
        title='Clique aqui'
        onPress={handlePress}
      /> */}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
