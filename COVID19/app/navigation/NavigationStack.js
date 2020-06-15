import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import World from '../screens/World';
import CountryDetails from '../screens/CountryDetails/CountryDetails';

const Stack = createStackNavigator();


const countryDetilsOption = {
  title: 'COVID19',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App() {
 
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
          <Stack.Screen name="World" component={World}  />
          <Stack.Screen name="CountryDetails" component={CountryDetails} options={countryDetilsOption} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
