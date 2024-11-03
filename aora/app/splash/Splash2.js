import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Splash2 = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Splash3'); // Auto navigate to Splash3 after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear timer if the component unmounts
  }, [navigation]);

  const handleSkip = () => {
    navigation.navigate('Home'); // Navigate directly to Main on skip
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/sos.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>SOS</Text>
      <Text style={styles.description}>
        SOS functionality that can call and send SMS on one tap to your close ones.
      </Text>
      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#F0F0FF' },
  image: { width: 200, height: 200, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 30 },
  skipButton: { position: 'absolute', bottom: 40 },
  skipText: { color: '#666', fontSize: 18 },
});

export default Splash2;
