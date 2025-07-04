import ProviderCard from '@components/ProviderCard';
import { getProviders } from '@services/providerService';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProviders();
      setProviders(data);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🍱 Discover Providers</Text>
      <ScrollView>
        {providers.map((p) => (
          <ProviderCard
            key={p.id}
            provider={p}
            onPress={() => navigation.navigate('ProviderDetail', { provider: p })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: '600', marginBottom: 12 }
});

export default HomeScreen;
