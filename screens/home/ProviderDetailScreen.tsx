import React from 'react';
import { Text, View } from 'react-native';

const ProviderDetailScreen = ({ route }) => {
  const { provider } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{provider.name}</Text>
      <Text>{provider.location}</Text>
    </View>
  );
};

export default ProviderDetailScreen;
