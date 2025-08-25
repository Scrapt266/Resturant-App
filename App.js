
import * as React from 'react';
import { View } from 'react-native';
import Profile from './Structure/profile.js';
import Homepage from './Structure/Hompage';
import Onboarding from './Structure/onboarding.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{NavigationContainer} from "@react-navigation/native"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
         <NavigationContainer style ={{ backgroundColor: '#C21E56'}}  >
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Profile" component={Profile}/>
              <Stack.Screen name="Home" component={Homepage}/>
               <Stack.Screen name="Login" component={Onboarding}/>
          </Stack.Navigator>
          </NavigationContainer>
  )
}
