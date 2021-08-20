import { ColorModeScript } from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
