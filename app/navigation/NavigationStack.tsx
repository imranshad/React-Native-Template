import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';

import Home from 'app/screens/Home';

const Stack = createStackNavigator();
const App=() => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
