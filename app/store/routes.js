import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Gallery from '../components/Gallery';
import FullImage from '../components/FullImage';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{
            title: 'Gallery',
            headerStyle: {backgroundColor: '#D9D9D9'},
          }}
        />
        <Stack.Screen
          name="FullImage"
          component={FullImage}
          options={{title: 'Image', headerStyle: {backgroundColor: '#D9D9D9'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
