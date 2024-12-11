import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function QuotePanel() {
  return (
    <View style={styles.panel}>
      <Text style={styles.quoteText}>
        "A única maneira de fazer um excelente trabalho é amar o que você faz."
      </Text>
      <Image 
        source={{ uri: 'https://via.placeholder.com/100' }} 
        style={styles.authorImage} 
      />
      <Text style={styles.authorName}>- Steve Jobs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});
