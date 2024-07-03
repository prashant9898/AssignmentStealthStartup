import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootNavigator />
    </GestureHandlerRootView>
  );
}

export default App;
