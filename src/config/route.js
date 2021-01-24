import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import RegisterConfirmationScreen from '../screens/Auth/RegisterConfirmationScreen';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const Stack = createStackNavigator();
const AuthStackScreen = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="RegisterConfirmation"
      component={RegisterConfirmationScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
