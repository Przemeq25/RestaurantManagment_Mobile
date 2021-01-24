import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import Provider from 'react-redux/lib/components/Provider';
import store from './src/redux/store';
import {theme} from './src/theme';
import React from 'react';

const Main = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
