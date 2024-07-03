import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import routes from '../navigation/Routes';

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.splash}>
        <Stack.Screen
          name={routes.splash}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
