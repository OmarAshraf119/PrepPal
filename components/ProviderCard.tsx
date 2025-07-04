import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProviderCard = ({ provider, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(provider)}>
    <Image source={{ uri: provider.logo_url }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{provider.name}</Text>
      <Text style={styles.tags}>{provider.tags?.join(', ')}</Text>
      <Text style={styles.location}>📍 {provider.location}</Text>
      <Text style={styles.rating}>⭐ {provider.rating?.toFixed(1)}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginVertical: 10, backgroundColor: '#FFF7ED', borderRadius: 12, overflow: 'hidden', elevation: 2 },
  image: { width: 100, height: 100 },
  info: { padding: 10, flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold' },
  tags: { fontSize: 14, color: '#FF6B00' },
  location: { fontSize: 13, color: '#888' },
  rating: { fontSize: 14, marginTop: 4 }
});

export default ProviderCard;
