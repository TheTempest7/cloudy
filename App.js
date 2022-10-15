
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import About from './components/About';
import Quotation from './components/Quotation';

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="About" component={About}
          options={{
            headerTitleStyle: { color: '#6DA4CD', fontFamily: 'Dosis-Bold', fontSize: 30 },
            headerStyle: { backgroundColor: '#4b0082' },

          }} />
        <Stack.Screen name="Quotation" component={Quotation}
          options={{
            headerTitleStyle: { color: '#6DA4CD', fontFamily: 'Dosis-Bold', fontSize: 30 },
            headerStyle: { backgroundColor: '#4b0082' },
            headerTintColor: '#6DA4CD'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
