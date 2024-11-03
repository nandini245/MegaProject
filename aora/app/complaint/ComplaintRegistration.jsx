import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Video } from 'expo-av'; // Use expo-av for the video component

const ComplaintRegistration = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState(''); // Added email state
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Handle submission logic here (e.g., sending data to the server)
    console.log('Complaint Submitted:', { name, contact, email, location, description }); // Include email in the submission
  };

  return (
    <ScrollView style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Complaint Registration</Text>

      {/* Video (Optional Feature) */}
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: 'https://www.example.com/video.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          style={styles.video}
        />
      </View>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#A9A9A9"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Contact Input */}
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        placeholderTextColor="#A9A9A9"
        keyboardType="phone-pad"
        value={contact}
        onChangeText={(text) => setContact(text)}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#A9A9A9"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)} // Handle email input
      />

      {/* Location Input */}
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor="#A9A9A9"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      {/* Description Input */}
      <TextInput
        style={styles.descriptionInput}
        placeholder="Describe the incident"
        placeholderTextColor="#A9A9A9"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Complaint</Text>
      </TouchableOpacity>

      {/* SOS Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.sosButton} onPress={() => console.log('SOS pressed')}>
          <Text style={styles.sosButtonText}>SOS</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7ff', // Light background color matching your theme
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 100, // Create a circular view
    overflow: 'hidden', // Ensure the video fits within the circle
    width: 150,
    height: 150,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#333', // Dark text color for input
  },
  descriptionInput: {
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#ff4d4f', // Red background color for the Submit button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#ff4d4f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  sosButton: {
    backgroundColor: '#ff4d4f', // Red SOS button color
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ff4d4f',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
  sosButtonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ComplaintRegistration;
