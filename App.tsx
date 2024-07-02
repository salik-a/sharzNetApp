import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './src/route';
import {Provider} from 'react-redux';
import store from './src/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
