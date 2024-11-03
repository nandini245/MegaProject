import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGlobalContext } from '../../context/GlobalProvider';  // Ensure you are using context for global state

const SplashNavigator = () => {
  const { isLogged } = useGlobalContext();  // Assuming you have an "isLogged" state in your global context
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a loading process (like fetching auth state)
    const timer = setTimeout(() => {
      if (isLogged) {
        navigation.replace('Splash1');  // If logged in, go to Splash1
      } else {
        navigation.replace('SignIn');  // Otherwise, go to Login
      }
    }, 2000);  // Adjust timer as needed

    return () => clearTimeout(timer);
  }, [isLogged, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" color="#673AB7" />
    </View>
  );
};

export default SplashNavigator;
