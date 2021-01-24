import React from 'react';
import {navigationRef, RootStackScreen} from './src/config/route';
import {NavigationContainer} from '@react-navigation/native';
import Alert from './src/components/Alert';

const App = () => {
  return (
    <>
      <Alert hideDuration={7000} />
      <NavigationContainer ref={navigationRef}>
        <RootStackScreen />
      </NavigationContainer>
    </>
  );
};

export default App;
