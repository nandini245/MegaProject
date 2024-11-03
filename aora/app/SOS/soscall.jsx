import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SOSCall = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOS Call</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SOSContacts')}
      >
        <Text style={styles.buttonText}>Show SOS Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SOS Text</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: '#FF4D4D', padding: 15, margin: 10, borderRadius: 10 },
  buttonText: { color: '#FFF', fontSize: 16 },
});

export default SOSCall;
