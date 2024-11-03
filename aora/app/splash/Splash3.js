import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Splash3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Us in Ensuring Safety</Text>
      <Text style={styles.description}>
        Together, we can make a difference.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.getStartedButton}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#F0F0FF' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 30 },
  getStartedButton: { position: 'absolute', bottom: 40, backgroundColor: '#673AB7', padding: 10, borderRadius: 5 },
  getStartedText: { color: '#FFFFFF', fontSize: 18 },
});

export default Splash3;
