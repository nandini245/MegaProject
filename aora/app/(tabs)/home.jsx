import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For social media icons

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../assets/images/logo(N).jpg')} // Replace with actual image path
          style={styles.profileImage}
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.title}>With U</Text>
      <Text style={styles.subtitle}>
        Welcome{'\n'}Sign up to get started. Login if you already have an account.
      </Text>

      {/* Social Media Sign Up Options */}
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <FontAwesome name="google" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="apple" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>

      {/* Login Text */}
      <TouchableOpacity>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden', // To ensure the image stays within the circular container
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
  signUpButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#888',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
