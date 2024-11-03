import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SOSContacts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call the contacts from the list</Text>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactText}>Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactText}>Family</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactText}>Close Ones</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.sosButton} 
        onPress={() => navigation.navigate('SOSTemplate')}
      >
        <Text style={styles.sosText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  contactButton: { backgroundColor: '#FFF', padding: 15, marginVertical: 10, borderRadius: 10 },
  contactText: { fontSize: 18 },
  sosButton: { backgroundColor: '#FF4D4D', padding: 15, borderRadius: 10, alignItems: 'center' },
  sosText: { color: '#FFF', fontSize: 16 },
});

export default SOSContacts;
