import React, {useCallback, useEffect} from 'react';
import Root from './src/root';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistedStore, store} from './src/redux/store';
import {initializeSslPinning} from 'react-native-ssl-public-key-pinning';

export default function App() {
  const intiPinning = useCallback(async () => {
    await initializeSslPinning({
      'typicode.com': {
        includeSubdomains: true,
        publicKeyHashes: ['Oc2z6cg1nPsrlEjs+EuBMaeC7Yuh57HWOQT+JT1X83M='],
      },
    });
  }, []);

  useEffect(() => {
    intiPinning();
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Root />
      </PersistGate>
    </Provider>
  );
}
