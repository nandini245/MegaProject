// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import Splash1 from '../splash/Splash1.js';  // Ensure correct path
// import Splash2 from '../splash/Splash2.js';  // Ensure correct path
// import Splash3 from '../splash/Splash3.js';  // Ensure correct path
// import Home from '../(tabs)/main.jsx';
// import SOSCall from '../SOS/soscall';
// import SOSContacts from '../SOS/soscontacts';
// import SOSTemplate from '../SOS/sostemplate';
// import ComplaintRegistration from '../complaint/ComplaintRegistration';
// import SignUp from '../(auth)/sign-up.jsx';  // Import SignUp screen
// import SignIn from '../(auth)/sign-in.jsx';  // Import SignIn screen

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login"> {/* Set the initial route */}
//         {/* Splash Screens */}
//         <Stack.Screen 
//           name="Splash1" 
//           component={Splash1} 
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen 
//           name="Splash2" 
//           component={Splash2} 
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen 
//           name="Splash3" 
//           component={Splash3} 
//           options={{ headerShown: false }} 
//         />
        
//         {/* Main Home Screen */}
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}  // Hide header for home screen
//         />

//         {/* Authentication Screens */}
//         <Stack.Screen
//           name="SignUp"
//           component={SignUp}
//           options={{ headerShown: true, title: 'Sign Up' }}  // Show header with title for sign up
//         />
//         <Stack.Screen
//           name="Login"
//           component={SignIn}
//           options={{ headerShown: true, title: 'Login' }}  // Show header with title for login
//         />

//         {/* SOS Screens */}
//         <Stack.Screen 
//           name="SOSCall" 
//           component={SOSCall} 
//           options={{ title: 'Emergency Call' }}  // Title for SOS Call screen
//         />
//         <Stack.Screen 
//           name="SOSContacts" 
//           component={SOSContacts} 
//           options={{ title: 'Emergency Contacts' }}  // Title for SOS Contacts screen
//         />
//         <Stack.Screen 
//           name="SOSTemplate" 
//           component={SOSTemplate} 
//           options={{ title: 'SOS Template' }}  // Title for SOS Template screen
//         />

//         {/* Complaint Registration Screen */}
//         <Stack.Screen 
//           name="ComplaintRegistration" 
//           component={ComplaintRegistration} 
//           options={{ title: 'Complaint Registration' }}  // Title for Complaint Registration screen
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash1 from '../splash/Splash1.js';  
import Splash2 from '../splash/Splash2.js';  
import Splash3 from '../splash/Splash3.js';  
import Home from '../(tabs)/main.jsx';
import SignUp from '../(auth)/sign-up.jsx';  
import SignIn from '../(auth)/sign-in.jsx';  

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash1">
        <Stack.Screen 
          name="Splash1" 
          component={Splash1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Splash2" 
          component={Splash2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Splash3" 
          component={Splash3} 
          options={{ headerShown: false }} 
        />
        {/* Other screens */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: true, title: 'Login' }}  
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: true, title: 'Sign Up' }}  
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
