/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {
  Provider as PaperProvider,
} from 'react-native-paper';

import Navigator from 'app/navigation';
import configureStore from 'app/store';

const { persistor, store } = configureStore();


const RootNavigation: React.FC = () => {

  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
};

const Entrypoint: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default Entrypoint;
