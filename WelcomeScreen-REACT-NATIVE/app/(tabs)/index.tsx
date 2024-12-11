import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/400x800' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bem-vindo ao App!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente para melhor contraste
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
