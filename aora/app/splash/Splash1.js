import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Splash1 = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation) {
        navigation.navigate('Splash2'); // Auto navigate to Splash2 after 3 seconds
      } else {
        console.warn("Navigation prop is undefined");
      }
    }, 2000);
    
    return () => clearTimeout(timer); // Clear timer if the component unmounts
  }, [navigation]);

  const handleSkip = () => {
    if (navigation) {
      navigation.navigate('Splash2');
    } else {
      console.warn("Navigation prop is undefined on skip");
      // navigation.navigate('Splash3');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/safety.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>We are all about Women's Safety</Text>
      <Text style={styles.description}>
        Stay mindful with us... This app is designed to ensure your safety at all times.
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

export default Splash1;
