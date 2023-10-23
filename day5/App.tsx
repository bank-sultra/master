import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import Root from './src/root';
import {QueryClientProvider, QueryClient} from 'react-query';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Root />
      </Provider>
    </QueryClientProvider>
  );
}
// Store
// tempat penyimpanan state

// Reducer
// tempat penyimpinan state

// Action
// function yang di gunakan untuk mengatur alur dari suatu state
