import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MealCard = ({ meal }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: meal.image_url }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{meal.title}</Text>
      <Text style={styles.price}>EGP {meal.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#fdfdfd' },
  image: { width: '100%', height: 180 },
  info: { padding: 12 },
  title: { fontSize: 18, fontWeight: '600' },
  price: { fontSize: 16, color: '#FF6B00', marginTop: 4 },
});

export default MealCard;
